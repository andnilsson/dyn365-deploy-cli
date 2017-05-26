# dyn365-deploy-cli
A small cli to upload files to a dynamics 365 instance.
Could be used as a developer tool or as a CI/CD tool in an automated build or delivery

# By [Stratiteq Sweden AB](http://www.stratiteq.com/)

__This CLI is a work in progress__
Currently its not stable enough to be used in a production environment, but it works fine as a developer tool

### prerequisites of use
- dynamics 365
- Oauth2 access to dynamics 365 web api [azure ad web app with access to dynamics 365](http://scaleablesolutions.com/how-to-register-dynamics-crm-app-with-azure-active-directory/)

### install
```
$ npm install -g dyn365-deploy-cli
$ crm-deploy init
```
Enter credentials to authenticate to dynamics 365 web api.
The credentials will be stored on disk at the project root in a file called .crmdeployconfig in plain text. This file is not recomended to be added to source control.

__note:__ the init function does not add this file to .gitignore even if it says it will. You´ll have to add it manually.

### generate
```
$ crm-deploy generate contacts
```

will generate a file /src/domain/contacts.ts

This function will do a metadata query matching the name parameter agains the entity set name, and map the response to a typescript class and generate a file with the name of the entity. This file will contain alla properties of the entity. It will map all picklists to enumerations.

Two classes will be generated. Using contacts as an exemple, it will generate one class to be used when using the crm web api. 

The other class can be used on form scripts. All properties are wrapped in a 'crm base class' containing getters and setters to the form. This can be achieved with [crm-common-js](https://www.npmjs.com/package/crm-common-js), so that must be accessible for this to work.


### deploy
```
$ crm-deploy deploy
```
The deploy function will authenticate and upload all files inside appointed folder and its subfolders to crm once. If its an unknown file type, the file will be ignored

When the upload is completed it will publish the changes
```
$ crm-deploy deploy filename
```

Filenames is optional. If a file name(s) is provided, only files thats partially match the provided file name will be uploaded. More than one file can be added seperated with space

### stress
```
$ crm-deploy stress
```
This will add a record in dyn365 and remove it again. This will be repeated until the program is closed.

The intented use of this function is to "stress" the instance and force it to scale up and to be a little quicker to work with

### watch
```
$ crm-deploy watch
```
The watch function will authenticate and initially upload all files inside appointed folder and its subfolders. Unknown file typeswill be ignored. 

After that it will look for changes to the appointed folder and its subfolders, and whenever it detect a change, it will queue the file in an upload queue, wait for one second, and upload the changed files to dynamics 365. 

The purpose of the queue is to give the dynamics 365 web api a chance to handle all requests without choking out.

When the upload is completed it will publish the changes. The watch function does not call publish more than once simultaniously per instance. 



