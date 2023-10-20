const mongoose = require("mongoose");

const Schema = mongoose.schema;

const StudentSchema = new Schema({
  name: String,
});

const Student = mongoose.model("student", StudentSchema);

module.exports = Student;
