const {Schema, model} = require("mongoose");
const CategorySchema = new Schema({
    title: {type: String, required: true},
});

const categoryModel = model('category', CategorySchema);
module.exports = {categoryModel};