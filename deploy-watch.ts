import getTokenAsync from 'dyn365-access-token';
import {
    createWebResourcesAsync,
    getExistingFileIdsAsync,
    uploadFileAsync,
    createSingleWebResource
} from 'dyn365-file-uploader'
import * as CLI from 'clui';
var path = require('path');
var watcher = require('node-watch');
import * as en from 'linq';
import { variables } from './ivariables';
import fs = require('fs');
import readConfig from "./readconfig";
var unirest = require("unirest");

async function watch() {

    console.log("Starting...");

    var config = await readConfig();
    if (!config) throw "no config found";

    var baseurl = config.baseurl;
    var req = {
        username: config.username,
        password: config.password,
        client_id: config.clientid,
        client_secret: config.clientsecret,
        resource: config.resource,
        commonAuthority: config.commonAuthority,
    }

    var publisher = config.publisher;
    var apiversion = config.apiversion;
    var sourcepath = config.baseurl;


    var spinner = new CLI.Spinner('Authenticating you, please wait...');
    spinner.start();
    var accesstoken = await getTokenAsync(req);

    var webresources = await createWebResourcesAsync(sourcepath, publisher);

    spinner.message("getting existing webresources from dyn365");
    await getExistingFileIdsAsync(webresources, config.resource, apiversion, accesstoken);

    var reqs = webresources.map((wr, i) => {
        return uploadFileAsync(wr, config.resource, apiversion, accesstoken);
    });

    spinner.message("staring uploading web resources");
    await Promise.all(reqs);
    console.log(`done. executed ${reqs.length} requests`);

    spinner.message("publishing...");
    await publishcrm(accesstoken, config.resource, config.apiversion);
    console.log("done...");

    spinner.message("Watching....");

    watcher(sourcepath, { recursive: true }, async (e, filename) => {
        console.log(`tracked change on ${filename}`);

        var wr = [createSingleWebResource(filename, sourcepath, publisher)];
        if (!wr) return;

        await getExistingFileIdsAsync(wr, config.resource, apiversion, accesstoken);

        spinner.message("staring uploading web resources");
        await uploadFileAsync(wr[0], config.resource, apiversion, accesstoken);

        spinner.message("publishing...");
        await publishcrm(accesstoken, config.resource, config.apiversion);
        console.log("done...");

        spinner.message("Watching....");
    });
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





watch();