const NoteController = require("../controllers/note.controller");

module.exports = (app) => {
  app.post("/api/notes", NoteController.createNewNote);
  app.get("/api/notes", NoteController.getAllNotes);
  app.get("/api/notes/:id", NoteController.getOneNote);
  app.put("/api/notes/:id", NoteController.updateNote);
  app.delete("/api/notes/:id", NoteController.deleteExistingUser);
};