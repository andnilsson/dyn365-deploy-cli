import { variables } from './ivariables';
var path = require('path');
import fs = require('fs');

export default async function readConfig(): Promise<variables> {
    return new Promise<variables>((resolve, reject) => {
        var sourcepath = path.dirname(process.cwd()) + '\\' + path.basename(process.cwd()) + '\\.crmdeployconfig';
        var file = fs.readFile(sourcepath, 'utf8', (err, data) => {
            var cfg = JSON.parse(data) as variables;
            cfg.root = path.dirname(process.cwd()) + '\\' + path.basename(process.cwd());
            resolve(cfg);
        });

    });
}