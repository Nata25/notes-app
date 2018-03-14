// const obj = {
//     name: 'Nata',
// };

// const result = JSON.stringify(obj);
// console.log(typeof result);
// console.log(result);

// const personJson = '{"name": "Natali", "age": 50}';
// const personObject = JSON.parse(personJson);

const fs = require('fs');
const originalNote = {
    title: 'Note 1',
    body: 'Content of Note 1',
};

const originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);
const noteString = fs.readFileSync('notes.json');
const note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);