//Importing FileSystem and path for directory
const fs = require("fs");
const path = require("path");

//Importing auto uuid generator
var KeyGenerator = require("uuid-key-generator");

//CreateNotes
function createNewNote(body, notesArray) {
  const note = body;
  var keygen = new KeyGenerator();
  console.log(keygen.generateKey());
  body.id = keygen.generateKey();
  console.log("New note" + note.id);
  notesArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notes: notesArray }, null, 2)
  );
  return note;
}

//Delete Note
function deleteNote(notesArray) {
  console.log(notesArray);
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notes: notesArray }, null, 2)
  );
}

// Exporting Module
module.exports = { deleteNote, createNewNote };
