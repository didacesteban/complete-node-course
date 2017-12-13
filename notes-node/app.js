console.log('starting app');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;

console.log('YARGS ', argv);

var command = argv._[0];

switch (command) {
  case 'add':
    notes.addNote(argv.title, argv.body);
    break;
  case 'list':
    notes.getAllNotes();
    break;
  case 'read':
    notes.readNote(argv.title);
    break;
  case 'remove':
    notes.removeNote(argv.title);
    break;
  default:
    console.log('Command not found');
}
