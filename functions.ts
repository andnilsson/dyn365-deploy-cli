import { variables } from './ivariables';
import getTokenAsync from 'dyn365-access-token';
var unirest = require("unirest");

export async function getAccessToken(config: variables) {
    var req = {
        username: config.username,
        password: config.password,
        client_id: config.clientid,
        client_secret: config.clientsecret,
        resource: config.resource,
        commonAuthority: config.commonAuthority,
    }

    return await getTokenAsync(req);    
}

export async function publishcrm(token: string, resource: string, apiversion: string): Promise<void> {
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