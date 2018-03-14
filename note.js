console.log('Starting notes.js...');
const fs = require('fs');

// read data about existing notes
const fetchNotes = () => {
    try {
        return JSON.parse(fs.readFileSync('notes-data.json'));
    } catch (e) {
        return [];
    }
};

// update data about existing notes
const saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

module.exports = {
    age: 35,
    addNote: function(title, body) {
        let notes = fetchNotes();
        const note = {
            title,
            body,
        };
        
        const notesDuplicates = notes.filter(note => note.title === title);
        if (!notesDuplicates.length) {
            notes.push(note);
            saveNotes(notes);
            return note;
        }
        else {
            return '';
        }
    },
    getAll: function() {
        console.log('Getting all notes...');
    },
    readNote: function(title) {
        console.log('Reading note', title);
    },
    removeNote: function(title) {
        console.log('Removing note', title);
    }
};