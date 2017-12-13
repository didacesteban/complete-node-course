console.log('starting notes js');

var addNote = (title, body) => {
  console.log('adding note ', title, body);
};

var getAllNotes = () => {
  console.log('Getting all notes');
};

var readNote = (title) => {
  console.log('Rading note', title);
};

var removeNote = (title) => {
  console.log('Removing note', title);
};

module.exports = {
  addNote,
  getAllNotes,
  readNote,
  removeNote
};
