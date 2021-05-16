const mongoose = require("mongoose");

const todo = new mongoose.Schema({
    task:{type: String ,required: true, unique: true },
    description:{ type: String, required: true, unique: true },
    deadline:{ type:Date , required: true, unique: true },
    isCompleted:{ type: Boolean, required: true },
    priority:{ type: Number, unique: true }
})

// create and export the mongoose model
module.exports = mongoose.model("todo", todo);