import { setTimeout } from 'timers';
import getTokenAsync from 'dyn365-access-token';
import readConfig from "./readconfig";
import * as CLI from 'clui';
var unirest = require("unirest");

async function stress() {
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

    var spinner = new CLI.Spinner('Authenticating you, please wait...');
    spinner.start();
    var accesstoken = await getTokenAsync(req);

    spinner.message("stressing...");

    while (true) {
        var id = await createrecord(config.resource, config.apiversion, accesstoken);
        await deleterecord(id, config.resource, config.apiversion, accesstoken);
    }

}

async function createrecord(resource: string, apiversion: string, token: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        var req = unirest("POST", `${resource}/api/data/v${apiversion}/contacts`);

        req.headers({
            "content-type": "application/json",
            "authorization": `Bearer ${token}`,
            "Prefer": "return=representation"
        });

        req.type("json");
        req.send({
            "firstname": "stress",
            "lastname": "stresson"
        });

        req.end(function (res) {
            if (res.error) reject(res.error);
            setTimeout(() => {
                resolve(res.body.contactid);                
            }, 200)

        });
    });
}

async function deleterecord(id: string, resource: string, apiversion: string, token: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        var req = unirest("DELETE", `${resource}/api/data/v${apiversion}/contacts(${id})`);

        req.headers({
            "content-type": "application/json",
            "authorization": `Bearer ${token}`
        });

        req.type("json");
        req.send();

        req.end(function (res) {
            if (res.error) reject(res.error);
            setTimeout(() => {
                resolve();                
            }, 200)
        });
    });
}


stress();