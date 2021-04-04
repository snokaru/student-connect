const mongoose = require("mongoose");
const User = require("./user");

const studentSchema = new mongoose.Schema({
    student: {
        birthDate: {
            type: Date,
        },
        school: {
            type: String,
            required: true,
            default: "", // TODO: REMOVE DEFAULT
        },
    },
});

const Student = User.discriminator('Student', studentSchema);

module.exports = Student;
