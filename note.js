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
};

const addNote = (title, body) => {
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
};

const readNote = (title) => {
    const notes = fetchNotes();
    return notes.find(note => note.title === title);
};

const getAll = () => {
    return fetchNotes();
};

const removeNote = title => {
    const notes = fetchNotes();
    const filtered = notes.filter(note => note.title !== title);
    saveNotes(filtered);
    return notes.length !== filtered.length;
};

const log = obj => {
    debugger;
    console.log('-*-*-*-*-');
    console.log(`Title: ${obj.title}`);
    console.log(`Content: ${obj.body}`);
};

module.exports = {
    addNote,
    getAll,
    readNote,
    removeNote,
    log,
};