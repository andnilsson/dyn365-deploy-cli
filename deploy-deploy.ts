import { getAccessToken, publishcrm } from './functions';
import { writeFiglet } from './figlet';
import * as CLI from 'clui';
import {
    createWebResourcesAsync,
    getExistingFileIdsAsync,
    uploadFileAsync,
    createSingleWebResource,
    Webresource
} from 'dyn365-file-uploader'


import * as en from 'linq';
import { variables } from './ivariables';
import readConfig from "./readconfig";
var program = require('commander');


var config = {} as variables;
var spinner: any = null;
var accesstoken: string = "";
var webresources: Webresource[] = [];
var filenames: en.IEnumerable<string> = en.from([]);

async function upload(filenameparams: string[] = null): Promise<void> {
    return new Promise<void>(async (resolve, reject) => {
        await writeFiglet("upload files");

        if (filenameparams && filenameparams.length > 0) {
            filenames = en.from(filenameparams);
            filenames.forEach(f => console.log('uploading files matching ' + f));
        };


        config = await readConfig();
        if (!config) throw "no config found";

        accesstoken = await getAccessToken(config);
        spinner = new CLI.Spinner('Working');
        spinner.start();

        if (filenameparams && filenameparams.length > 0)
            webresources = en.from(await createWebResourcesAsync(config.baseurl, config.publisher)).where(x => filenames.any(filename => x.name.indexOf(filename) > 0)).toArray();
        else
            webresources = await createWebResourcesAsync(config.baseurl, config.publisher);

        if (webresources.length > 0)
            await uploadWebresources();
        else console.log("no files found");

        console.log("done");
        spinner.stop();
        resolve();
    });
}

async function uploadWebresources() {
    if (webresources.length < 1) return;
    if (filenames.count() > 0) {
        webresources = en.from(webresources).where(x => filenames.any(filename => x.name.indexOf(filename) > 0)).toArray();
    }

    spinner.message("getting existing webresources from dyn365");
    await getExistingFileIdsAsync(webresources, config.resource, config.apiversion, accesstoken);

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
}


program.parse(process.argv);

upload(program.args);