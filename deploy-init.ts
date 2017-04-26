import { variables } from './ivariables';
var p = require('prompt');
var fs = require('fs');
var path = require('path');

async function init() {
    var configfilename = '.crmdeployconfig';
    var config = await getvariablesAsync();
    var dir = path.dirname(process.cwd()) + '\\' + path.basename(process.cwd());
    config.baseurl = dir + '\\' + config.baseurl;

    fs.writeFile(dir + '\\' + configfilename, JSON.stringify(config), (err) => {
        if (err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });
}

async function getvariablesAsync(): Promise<variables> {
    return new Promise<variables>((resolve, reject) => {
        var schema = {
            properties: {
                baseurl: {
                    message: 'build folder relative to this path',
                    default: "stq_",
                    required: true
                },
                username: {
                    message: 'dyn365 username to impersonate',
                    required: true
                },
                password: {
                    hidden: true
                },
                clientid: {
                    message: 'client id of azure ad app',
                    required: true
                },
                clientsecret: {
                    required: true
                },
                resource: {
                    message: 'usually the dyn 365 instance',
                    required: true
                },
                commonAuthority: {
                    message: "usually something like this: 'https://login.windows.net/<<tenant>>.onmicrosoft.com/oauth2/token'",
                    required: true
                },
                apiversion: {
                    default: "8.2",
                    message: 'crm api version',
                    required: true
                },
                publisher: {
                    default: "stq_",
                    message: 'crm default publisher prefix',
                    required: true
                },
            }
        };
        p.start();
        var params = {} as variables;
        p.get(schema, (err, result) => {
            var params = {} as variables;
            for (var key in result) {
                params[key] = result[key];
            }
            resolve(params);
        });
    });
}

init();