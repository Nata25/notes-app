console.log('Starting app.js...');
const fs = require('fs');

const _ = require('lodash');
const notes = require('./note.js');

const command = process.argv[2];
console.log(command);
console.log(process.argv);

if (command === 'add') console.log('Add a note');
else if (command === 'list') console.log('Printing notes');
else if (command === 'read') console.log('Fetching note...');
else if (command === 'remove') console.log('Removing note...');
else console.log('Command is unrecognized');