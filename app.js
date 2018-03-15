const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./note.js');

const titleOptions = {
    describe: 'Title of the note',
    demand: true,
    alias: 't',
};
const bodyOptions = {
    describe: 'Content of the note',
    demand: true,
    alias: 'b',
};

const argv = yargs
    .command('add', 'Add new note', {
        title: titleOptions,
        body: bodyOptions,
    })
    .command('list', 'Display list of notes')
    .command('read', 'Read a note', {
        title: titleOptions,
    })
    .command('remove', 'Delete a note', {
        title: titleOptions,
    })
    .help()
    .argv;

const command = argv._[0];

if (command === 'add') {
    const result = notes.addNote(argv.title, argv.body);
    if (result) {
        console.log(`Note ${result} successfully added!`);
        notes.log(result);
    } else console.log('Duplicate note title!');
}
else if (command === 'list') {
    const notesList = notes.getAll();
    console.log(`Printing ${notesList.length} note(s):`);
    notesList.forEach(note => notes.log(note));
}
else if (command === 'read') {
    const result = notes.readNote(argv.title);
    if (result) {
        console.log('Note found!');
        notes.log(result);
    }
    else console.log('Note not found');
}
else if (command === 'remove') {
    const result = notes.removeNote(argv.title);
    if (result) console.log('Note was successfully deleted');
    else console.log('Note wasn\'t found!');
}
else console.log('Command is unrecognized');