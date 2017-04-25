#! /usr/bin/env node
import shell from "shelljs";
var program = require('commander');

program
.version('0.0.1')
.command('init [folder]','creates config file, adds it to .gitignore')
.command('stress', 'creates and deletes record in crm for it to scale up and be workable....')
.command('watch','wating files in directory and uploads them to dyn 365 whenver they change', {isDefault: true})
.parse(process.argv);

  