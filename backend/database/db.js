const mongoose= require("mongoose");
const { number, object } = require("zod");

mongoose.connect("")

const todoschema = new mongoose.Schema(
    {
    key: Number,
    title: String,
    Description : String,
    Doneby: Number,
    Completed : Boolean
    }
)

const todos = mongoose.model("Todos" , todoschema);

module.exports = {
    todos
}