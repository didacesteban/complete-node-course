const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;

var command = argv._[0];

switch (command) {
  case 'add':
    var note = notes.addNote(argv.title, argv.body);
    if(note){
      console.log(`Note ${note.title} added successfully`);
      notes.logNote(note);
    }else{
      console.log('Impossible to add your note. Make sure that You are not adding a note already added');
    }
    break;
  case 'list':
    var allNotes = notes.getAllNotes();
    allNotes.forEach((note) => notes.logNote(note));
    break;
  case 'read':
    var note = notes.readNote(argv.title);
    if(note){
      notes.logNote(note);
    }else{
      console.log('Impossible to read this note.');
    }
    break;
  case 'remove':
    var noteRemove = notes.removeNote(argv.title);
    var message = noteRemove ? 'Removed' : 'Not removed';
    console.log(message);
    break;
  default:
    console.log('Command not found');
}
