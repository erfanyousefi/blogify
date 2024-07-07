const { Schema, Types } = require("mongoose");

const BlogSchema = new Schema({
    title: {type: String, required: true},
    short_dec: {type: String, required: true},
    long_desc: {type: String, required: true},
    author: {type: Types.ObjectId, ref: "user", required: true},
    likes: {type: [Types.ObjectId], ref: "user", required: true},
    image: {type: String, required: true},
    category: {type: Types.ObjectId, ref: "category",required: true},
}, {timestamps: true});

const blogModel = model('blog', BlogSchema);
module.exports = {
    blogModel
}