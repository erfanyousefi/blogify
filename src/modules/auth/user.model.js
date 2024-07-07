const { Schema } = require("mongoose");

const UserSchema = new Schema({
    username: {type: String, required: true, unique: true},
    firstname: {type: String, required: false},
    lastname: {type: String, required: false},
    password: {type: String, required: false}
}, {timestamps: {createdAt: true}});

const userModel = model('user', UserSchema);
module.exports = {userModel};