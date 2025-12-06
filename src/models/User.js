const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        require: true,
        type: String,
        unique: true
    },
    fisrtName: {
        type: String,
    },
    lastName: {
        tyoe: String
    },
    password: {
        require: true,
        type: String
    },
    email: {
        require: true,
        type: String,
        unique: true
    },
}, {
    timestamps : true
});

const User = mongoose.model("User", userSchema);


module.exports = User;

