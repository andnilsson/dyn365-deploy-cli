import { MetadataResponse, MetadataContents } from './model/MetadataResponse';
import { OptionsetMetadata } from './model/OptionsetMetadata';
import { EntityMetadata } from './model/EntityMetadata';
import { getAccessToken } from './functions';
import { writeFiglet } from './figlet';
import readConfig from './readconfig';
var unirest = require("unirest");
import * as CLI from 'clui';
var program = require('commander');
var fs = require('fs');
import * as en from 'linq';

var domainroot: string;
var spinner: any = null;
var baseurl: string = "";
var apiversion: string = "";
var accesstoken: string;
var modelroot: string = "";
async function generate(filenameparams: string[] = null): Promise<void> {
    return new Promise<void>(async (resolve, reject) => {
        try {
            modelroot = __dirname.split('\\bin')[0] + "\\model\\";
            await writeFiglet("generate domain model");
            var config = await readConfig();
            accesstoken = await getAccessToken(config);
            baseurl = config.resource;
            apiversion = config.apiversion;
            spinner = new CLI.Spinner('Working');
            spinner.start();

            var srcroot = config.root + "\\src";
            if (!fs.existsSync(srcroot))
                fs.mkdirSync(srcroot);

            domainroot = srcroot + "\\domain\\";
            if (!fs.existsSync(domainroot))
                fs.mkdirSync(domainroot);
            domainroot = domainroot + "model\\";
            if (!fs.existsSync(domainroot))
                fs.mkdirSync(domainroot);

            await writeBaseFile();
            var modelrequests = filenameparams.map((name) => composeModel(name));

            var models = await Promise.all(modelrequests).catch(e => {
                console.log(e)
                return;
            }) as Model[];

            models.forEach(model => writeModelFile(model));

            spinner.stop();
            resolve();
        } catch (e) {
            reject(e);
        }
    });
}

class Model {
    name: string
    content: string

    constructor(partial?: Partial<Model>) {
        Object.assign(this, partial);
    }
}

async function composeModel(entityname: string): Promise<Model> {
    return new Promise<Model>(async (resolve, reject) => {
        var m = await getMetadataResponse(entityname).catch(e => { console.log(e) });
        if (!m) {
            resolve();
            return;
        }
        var metadatacontent = m as MetadataContents;
        var optionsets = await getOptioinSets(metadatacontent.MetadataId);
        var metadata = await getEntityMetadata(metadatacontent.MetadataId);
        var label = en.from(metadatacontent.DisplayName.LocalizedLabels).where(x => x.LanguageCode == 1033).firstOrDefault();
        if (label != null)
            entityname = clean(label.Label);
        var model = getObjectModel(metadata, entityname, metadatacontent.EntitySetName, optionsets)

        resolve(model);
    });
}

async function writeBaseFile(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        let readStream = fs.createReadStream(modelroot + 'base.txt');
        readStream.once('error', (err) => {
            console.log(err);
            reject(err);
            return;
        });

        readStream.once('end', () => {
            console.log(domainroot + 'Base.ts was generated');
            resolve();
            return;
        });

        readStream.pipe(fs.createWriteStream(domainroot + 'Base.ts'));

    });
}

class AttributeMapp {
    attributeType: string;
    typeRepresentation: string;

}

const attributeTypeWhitelist = en.from([
    { attributeType: "String", typeRepresentation: "string" },
    { attributeType: "Integer", typeRepresentation: "number" },
    { attributeType: "Memo", typeRepresentation: "string" },
    { attributeType: "Picklist", typeRepresentation: "number" },
    { attributeType: "Uniqueidentifier", typeRepresentation: "string" },
    { attributeType: "Boolean", typeRepresentation: "boolean" },
    { attributeType: "Double", typeRepresentation: "number" },
] as AttributeMapp[])

function GenerateOptionsets(optionsets: OptionsetMetadata): string {
    var rows = [];
    optionsets.value.forEach((optionset) => {
        rows.push(`export enum ${optionset.LogicalName} {`);
        if (optionset.GlobalOptionSet) {
            optionset.GlobalOptionSet.Options.forEach(option => {
                var label = en.from(option.Label.LocalizedLabels).where(x => (x as any).LanguageCode == 1033).firstOrDefault();
                var cleanlabel = clean((label as any).Label);
                rows.push(` ${cleanlabel} = ${option.Value},`);
            });
        } else if (optionset.OptionSet) {
            optionset.OptionSet.Options.forEach(option => {
                var label = en.from(option.Label.LocalizedLabels).where(x => x.LanguageCode == 1033).firstOrDefault();
                var cleanlabel = clean(label.Label);
                rows.push(` ${cleanlabel} = ${option.Value},`);
            });
        }
        rows.push('}');
        rows.push('');
    });
    return rows.join("\n");
}

function clean(string: string) {
    var reg = /[a-zA-Z0-9_]+/g;

    var clean = string.match(reg);
    if (clean == null || clean.length < 1) return "undefined";
    var cleanstring = clean.join("");
    if (!isNaN(parseInt(cleanstring.charAt(0))))
        return "enum" + cleanstring;

    return cleanstring;
}

function getFormModel(metadata: EntityMetadata, entityname: string, optionsets: OptionsetMetadata): string {
    var arr = [];
    arr.push(`export class ${entityname}Form {`);
    en.from(metadata.Attributes).where(a => a.DisplayName.LocalizedLabels.length > 0 && a.Targets != null || attributeTypeWhitelist.any(m => m.attributeType === a.AttributeType)).forEach((attr) => {
        if (attr.AttributeType == "Picklist") {
            arr.push(`  ${attr.LogicalName}: CrmProp<${attr.LogicalName}> = new CrmProp<${attr.LogicalName}>("${attr.LogicalName}")`);
        } else if (attr.Targets != null) {
            arr.push(`  ${attr.LogicalName}: CrmProp<EntityReference> = new CrmProp<EntityReference>("${attr.LogicalName}")`);
        } else {
            var type = attributeTypeWhitelist.where(x => x.attributeType === attr.AttributeType).firstOrDefault();
            if (type) {
                arr.push(`  ${attr.LogicalName}: CrmProp<${type.typeRepresentation}> = new CrmProp<${type.typeRepresentation}>("${attr.LogicalName}")`);
            }
        }
    });
    arr.push(`}`);
    arr.push('');

    return arr.join("\n");
}

function getObjectModel(metadata: EntityMetadata, entityname: string, schemaname: string,  optionsets: OptionsetMetadata): Model {
    var arr = [];
    arr.push("import { CrmProp, EntityReference, Money, IQueryable } from './Base'")
    arr.push('');
    arr.push(GenerateOptionsets(optionsets));
    arr.push(`export class ${entityname} {`);
    arr.push(`  getSchemaName() { return "${schemaname}" };`)
    en.from(metadata.Attributes).where(a => a.DisplayName.LocalizedLabels.length > 0 && a.Targets != null || attributeTypeWhitelist.any(m => m.attributeType === a.AttributeType)).forEach((attr) => {
        if (attr.AttributeType == "Picklist") {
            arr.push(`  ${attr.LogicalName}: ${attr.LogicalName};`);
        } else if (attr.Targets != null) {
            arr.push(`  ${attr.LogicalName}: EntityReference`);
        } else {
            var type = attributeTypeWhitelist.where(x => x.attributeType === attr.AttributeType).firstOrDefault();
            if (type) {
                arr.push(`  ${attr.LogicalName}: ${type.typeRepresentation};`);
            }
        }
    });
    arr.push(`}`);
    arr.push('');

    arr.push(getFormModel(metadata, entityname, optionsets));
    return new Model({
        name: entityname,
        content: arr.join("\n")
    });
}

async function getOptioinSets(metadataid: string): Promise<OptionsetMetadata> {
    return new Promise<OptionsetMetadata>((resolve, reject) => {
        var req = unirest("GET", `${baseurl}/api/data/v${apiversion}/EntityDefinitions(${metadataid})/Attributes/Microsoft.Dynamics.CRM.PicklistAttributeMetadata`);

        req.query({
            "$select": "LogicalName",
            "$expand": "OptionSet,GlobalOptionSet"
        });
        req.headers({
            "cache-control": "no-cache",
            "authorization": `Bearer ${accesstoken}`,
            "content-type": "application/json"
        });


        req.end(function (res) {
            if (res.error) {
                console.log(res.error);
                reject();
                return;
            }

            resolve(res.body);
        });

    });
}

async function getEntityMetadata(metadataid: string): Promise<EntityMetadata> {
    return new Promise<EntityMetadata>((resolve, reject) => {
        var req = unirest("GET", `${baseurl}/api/data/v${apiversion}/EntityDefinitions(${metadataid})`);
        req.query({
            "$expand": "Attributes",
            "$select": "Attributes"
        });

        req.headers({
            "cache-control": "no-cache",
            "authorization": `Bearer ${accesstoken}`,
            "content-type": "application/json"
        });


        req.end(function (res) {
            if (res.error) {
                console.log(res.error);
                reject();
                return;
            }

            resolve(res.body);
        });

    });
}

async function getMetadataResponse(entityname: string): Promise<MetadataContents> {
    return new Promise<MetadataContents>((resolve, reject) => {
        var req = unirest("GET", `${baseurl}/api/data/v${apiversion}/EntityDefinitions`);

        req.query({
            "$select": "DisplayName,IsKnowledgeManagementEnabled,EntitySetName",
            "$filter": `EntitySetName eq '${entityname}'`
        });

        req.headers({
            "cache-control": "no-cache",
            "content-type": "application/json",
            "authorization": `Bearer ${accesstoken}`
        });

        req.type("json");
        req.send();

        req.end(function (res) {
            if (res.error) {
                console.log(res.error);
                reject();
                return;
            }

            var response = res.body as MetadataResponse;
            if (response.value.length < 1)
                reject("could not find entity with entitysetname eq " + entityname);
            else if (response.value.length > 1)
                reject(`ambiguous reponse, found ${response.value.length} entities with entitysetname eq ${entityname}`);
            else
                resolve(response.value[0])
        });
    });
}

async function writeOptionsetFile(optionsetname, content): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        fs.writeFile(domainroot + '\\optionset\\' + optionsetname + ".ts", content, (e) => {
            if (e) {
                console.log(e);
                reject();
                return;
            }
            resolve();
        });
    });

}

function writeModelFile(model: Model) {
    if (!model) return;
    fs.writeFile(domainroot + model.name + ".ts", model.content, (e) => {
        if (e)
            console.log(e);
        else
            console.log(domainroot + model.name + ".ts" + " war generated");
    });
}

program.parse(process.argv);
try {
    generate(program.args);
} catch (e) { }