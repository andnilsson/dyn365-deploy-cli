var figlet = require('figlet');
var chalk = require('chalk');

export async function writeFiglet(name: string = ""): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        figlet('crm deploy ' + name, (err, crmdata) => {
            console.log(chalk.blue(crmdata));
            resolve();
        });        
    });
}