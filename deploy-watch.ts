import { writeFiglet } from './figlet';
import { setTimeout } from 'timers';
import getTokenAsync from 'dyn365-access-token';
import {
    createWebResourcesAsync,
    getExistingFileIdsAsync,
    uploadFileAsync,
    createSingleWebResource,
    Webresource
} from 'dyn365-file-uploader'
import * as CLI from 'clui';
var path = require('path');
var watcher = require('node-watch');
import * as en from 'linq';
import { variables } from './ivariables';
import readConfig from "./readconfig";
var program = require('commander');

var unirest = require("unirest");

var isPublishing: boolean = false;
var config = {} as variables;
var spinner: any = null;
var accesstoken: string = "";
var webresources: Webresource[] = [];
var timestamp: number = 0;
var existingResources: en.IEnumerable<Webresource> = en.from([]);
var filenames: en.IEnumerable<string> = en.from([]);

async function watch(filenameparams: string[] = null) {
    await writeFiglet("file watcher");
    
    if (filenameparams && filenameparams.length > 0) {
        filenames = en.from(filenameparams)
        console.log("watch started for files:");
        filenames.forEach(f => console.log(f));
    };
    
    spinner = new CLI.Spinner('Starting');
    config = await readConfig();
    if (!config) throw "no config found";

    await getAccessToken();

    webresources = en.from(await createWebResourcesAsync(config.baseurl, config.publisher)).where(x => filenames.any(filename => x.name.indexOf(filename) > 0)).toArray();
    
    if(webresources.length > 0)
        await uploadWebresources(0);

    spinner.message("Watching....");

    watcher(config.baseurl, { recursive: true }, (e, filename) => {
        console.log(`tracked change on ${filename}`);

        var wr = createSingleWebResource(filename, config.baseurl, config.publisher);
        if (!wr) return;

        addWrToQueue(wr);
    });
}

function addWrToQueue(wr: Webresource) {
    var existing = en.from(webresources).where(x => x.name == wr.name).firstOrDefault();
    if (existing) return;

    if (filenames.any(x => wr.name.indexOf(x) < 0)) {
        console.log(`${wr.name} does not match file name parameters`);
        return;
    }

    spinner.message("queueing file(s)");
    webresources.push(wr);
    var time = (new Date()).getTime();
    timestamp = time;
    setTimeout(() => uploadWebresources(time), 1000);
}

async function getAccessToken() {
    var req = {
        username: config.username,
        password: config.password,
        client_id: config.clientid,
        client_secret: config.clientsecret,
        resource: config.resource,
        commonAuthority: config.commonAuthority,
    }

    spinner = new CLI.Spinner('Authenticating you, please wait...');
    spinner.start();
    accesstoken = await getTokenAsync(req);
}

async function findIdOnWebresorces() {
    webresources.forEach((r) => {
        var existing = existingResources.where(ex => ex.name === r.name).firstOrDefault();
        if (existing)
            r.id = existing.id;
    });
    var withoutId = en.from(webresources).where(i => !i.id).toArray();
    if (withoutId.length > 0) {
        spinner.message("getting existing webresources from dyn365");
        await getExistingFileIdsAsync(withoutId, config.resource, config.apiversion, accesstoken);

        var withid = en.from(withoutId).where(x => x.id != null);
        existingResources = existingResources.concat(withid);

        webresources.forEach((r) => {
            var existing = existingResources.where(ex => ex.name === r.name).firstOrDefault();
            if (existing)
                r.id = existing.id;
        });
    }


}

async function uploadWebresources(time: number) {
    if (webresources.length < 1) return;
    if (time != timestamp) return;
    if (isPublishing) return;
    isPublishing = true;

    await findIdOnWebresorces();

    if(filenames.count() > 0){
        webresources = en.from(webresources).where(x => filenames.any(filename => x.name.indexOf(filename) > 0)).toArray();
    }

    webresources.forEach(r => console.log(`uploading ${r.name}`));

    var reqs = webresources.map((wr, i) => {
        return uploadFileAsync(wr, config.resource, config.apiversion, accesstoken);
    });

    spinner.message("uploading web resources");
    await Promise.all(reqs);
    console.log(`done. executed ${reqs.length} requests`);
    webresources = [];
    spinner.message("publishing");
    await publishcrm(accesstoken, config.resource, config.apiversion);
    isPublishing = false;
    spinner.message("watching");
}

async function publishcrm(token: string, resource: string, apiversion: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        var req = unirest("POST", `${resource}/api/data/v${apiversion}/PublishAllXml`);
        req.headers({
            "content-type": "application/json",
            "authorization": `Bearer ${token}`
        });
        req.end((res) => {
            if (res.error) throw new Error(res.error);

            resolve();
        });
    });

}


program.parse(process.argv);

watch(program.args);