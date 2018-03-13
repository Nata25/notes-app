console.log('Starting notes.js...');
module.exports = {
    age: 35,
    addNote: function() {
        console.log('addNote');
        return 'New note';
    },
    add: function(a, b) {
        return a + b;
    }
};