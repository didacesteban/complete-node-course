console.log('starting app');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

console.log(_.isString(4));
console.log(_.isString('true'));

// let user = os.userInfo();
//
// fs.appendFile('greetings.txt', `Hello ${user.username} You are ${notes.age}`, (err) => {
//   if(err){
//     console.log(`Something goes wrong: ${err}`);
//   }
// });
