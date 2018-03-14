console.log('Starting app.js...');
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./note.js');

const argv = yargs.argv;

// const command = process.argv[2];
const command = argv._[0];

// console.log('yargs.argv', argv);

if (command === 'add') {
    const result = notes.addNote(argv.title, argv.body);
    if (result) {
        console.log(`Note ${result} successfully added!`);
        console.log('-------');
        console.log(`Title: ${result.title}`);
        console.log(`Content: ${result.body}`);
    } else console.log('Duplicate note title!');
}
else if (command === 'list') {
    notes.getAll();
}
else if (command === 'read') {
    notes.readNote(argv.title);
}
else if (command === 'remove') {
    const result = notes.removeNote(argv.title);
    if (result) console.log('Note was successfully deleted');
    else console.log('Note wasn\'t found!');
}
else console.log('Command is unrecognized');