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
import fs = require('fs');
import readConfig from "./readconfig";
var unirest = require("unirest");

let config = {} as variables;
let spinner: any = null;
let accesstoken: string = "";
let webresources: Webresource[] = [];
let timestamp: number = 0;

async function watch() {
    spinner = new CLI.Spinner('Starting');
    config = await readConfig();
    if (!config) throw "no config found";
    
    await getAccessToken();

    webresources = await createWebResourcesAsync(config.baseurl, config.publisher);
    await uploadWebresources(0);

    spinner.message("Watching....");

    watcher(config.baseurl, { recursive: true }, (e, filename) => {
        console.log(`tracked change on ${filename}`);

        var wr = createSingleWebResource(filename, config.baseurl, config.publisher);
        if (!wr) return;

        addWrToQueue(wr);
    });
}

async function addWrToQueue(wr: Webresource) {
    webresources.push(wr);
    timestamp = (new Date()).getTime();
    setTimeout(() => uploadWebresources(timestamp), 1000);
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

async function uploadWebresources(time: number) {
    if(webresources.length < 1) return;
    if(time != timestamp) return;

    spinner.message("getting existing webresources from dyn365");
    await getExistingFileIdsAsync(webresources, config.resource, config.apiversion, accesstoken);

    var reqs = webresources.map((wr, i) => {
        return uploadFileAsync(wr, config.resource, config.apiversion, accesstoken);
    });

    spinner.message("staring uploading web resources");
    await Promise.all(reqs);
    console.log(`done. executed ${reqs.length} requests`);
    webresources = [];
    spinner.message("publishing...");
    await publishcrm(accesstoken, config.resource, config.apiversion);
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