const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const formSchema = new Schema(
  {
    user_id: { type: String, required: true },
    name: { type: String, required: true },
    content: { type: String, required: true },
    group: { type: String, required: true },
    draft: { type: Boolean, required: true },
    archive: { type: Boolean, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("form", formSchema);
