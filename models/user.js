const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        length: 5,
        required: true,
    },
    // TODO: Add Email Validation
    email: {
        type: String,
        length: 10,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: String,
        default: "",
    },
    description: {
        type: String,
        default: "",
    },
});

userSchema.plugin(uniqueValidator);

const User = mongoose.Model("User", userSchema);

module.exports = User;
