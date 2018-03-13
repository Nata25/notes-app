console.log('Starting notes.js...');
module.exports = {
    age: 35,
    addNote: function(title, body) {
        console.log('Adding note...', title, body);
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