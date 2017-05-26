#! /usr/bin/env node
import shell from "shelljs";
var program = require('commander');

program
.version('0.0.1')
.command('init [folder]','creates config file, adds it to .gitignore')
.command('stress', 'creates and deletes record in crm for it to scale up and be workable....')
.command('generate [name]', 'creates a typescript class for the given entity/entities. Name is case sensitive')
.command('watch [name]','watching files in directory and uploads them to dyn 365 whenver they change')
.command('deploy [name]','uploads files in directory to dyn 365 once')
.parse(process.argv);

  