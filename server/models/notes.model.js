const mongoose = require("mongoose");

const NotesSchema = {
  title: {
    type: String,
    required: [true, "Title is required"],
    minLength: [2, "Title must be at least 2 characters"],
  },
  body: {
    type: String,
    maxLength: [255, "Body must contain max of 255 characters"],
  },
};

module.exports = mongoose.model("Note", NotesSchema);