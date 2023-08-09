const Note = require("../models/notes.model");

const createNewNote = (req, res) => {
  Note.create(req.body)
    .then((newNote) => {
      res.json({ newNote });
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
};

const getAllNotes = (req, res) => {
  Note.find()
    .then((allNotes) => {
      res.json(allNotes);
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
};

const getOneNote = (req, res) => {
  Note.findOne({ _id: req.params.id })
    .then((queriedNote) => {
      res.json(queriedNote);
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
};

const updateNote = (req, res) => {
  Note.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedNote) => {
      res.json({ updatedNote });
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
};

const deleteExistingUser = (req, res) => {
  Note.deleteOne({ _id: req.params.id })
    .then((deletedResponse) => {
      res.json({ deletedResponse });
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
};

module.exports = {
  createNewNote,
  getOneNote,
  getAllNotes,
  updateNote,
  deleteExistingUser,
};