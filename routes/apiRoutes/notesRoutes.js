//Midleware
const router = require("express").Router();

//notes.js to hold all the functions
const { createNewNote, deleteNote } = require("../../lib/notes");

//notes to hold the db.json data
const { notes } = require("../../db/db.json");

router.get("/notes", (req, res) => {
  res.json(notes);
});

//Create New Notes
router.post("/notes", (req, res) => {
  req.body.id = notes.length.toString();
  const note = createNewNote(req.body, notes);
  res.json(note);
});

//delete Note
router.delete("/notes/:id", function (req, res) {
  const { id } = req.params;
  const projectIndex = notes.findIndex((notes) => notes.id == id);
  notes.splice(projectIndex, 1);
  deleteNote(notes);
  return res.send("Note Deleted!");
});

module.exports = router;
