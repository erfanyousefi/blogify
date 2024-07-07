const autoBind = require("auto-bind");
const {categoryModel} = require("./category.model");
const {isValidObjectId} = require("mongoose");
class CategoryService {
    constructor() {
        autoBind(this);
    }
    async create (categoryDto) {
        const {title} = categoryDto;
        const category = await categoryModel.create({title});
        return {
            message: "created successfully"
        };
    }
    async update (id, updateDto) {
        const category = await this.findOneById(id);
        const {title} = updateDto;
        if (title) category.title = title;
        await category.save();
        return {
            message: "updated successfully"
        };
    }
    async delete (id) {
        const category = await this.findOneById(id);
        await categoryModel.deleteOne({_id: category._id});
        return {
            message: "deleted"
        };
    }
    async findAll () {
        const categories = await categoryModel.find({});
        return {
            categories
        };
    }
    async findOneById (id) {
        if (isValidObjectId(id)) {
            const category = await categoryModel.findById(id);
            if (!category) throw {status: 404, message: "not found category"};
            return category;
        }
        throw {
            status: 400,
            message: "object id is invalid"
        };
    }
}

module.exports = CategoryService;