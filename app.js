console.log('Starting app.js...');
const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./note.js');

// let result = notes.addNote();
// let result = notes.add(3, 4);
let result = _.isString('abc');
console.log(result);
result = _.isString(111);
console.log(result);
result = _.uniq(['Natalya', '111', '222', '111', true, true, false]);
console.log(result);

// const user = os.userInfo();
// console.log(user);

// fs.appendFile('greetings.txt', 'hello', function(err) {
    // if (err) console.log('Unable to write to file');
// });

// fs.appendFileSync('greetings.txt', `Hello, ${user.username}! You are ${notes.age}.`);