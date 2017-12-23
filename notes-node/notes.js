const fs = require('fs');

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  }catch (err) {
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };
  var duplicateNotes = notes.filter((note) => note.title === title);

  if(duplicateNotes.length == 0){
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

var getAllNotes = () => {
  return fetchNotes();
};

var readNote = (title) => {
  var notes = fetchNotes();
  var noteFiltered = notes.filter((note) => note.title === title);
  return noteFiltered[0];
};

var removeNote = (title) => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title !== title);
  saveNotes(filteredNotes);

  return notes.length !== filteredNotes.length;
};

var logNote = (note) => {
  return console.log(`Title: ${note.title} Body: ${note.body}`);
};

module.exports = {
  addNote,
  getAllNotes,
  readNote,
  removeNote,
  logNote
};
