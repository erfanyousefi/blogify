const autoBind = require("auto-bind");
const CategoryService = require("../category/category.service");
const {blogModel} = require("./blog.model");
const {isValidObjectId} = require("mongoose");

class BlogService {
    #categoryService;
    constructor() {
        autoBind(this);
        this.#categoryService = new CategoryService();
    }
    async create (blogDto) {
        const {title,
            short_desc,
            long_desc,
            category: categoryId
        } = blogDto;
        const category = await this.#categoryService.findOneById(categoryId);
        const blog = await blogModel.create({
            title,
            short_desc,
            long_desc,
            category: category._id
        });
        return {
            message: "created"
        };
    }
    async update (id, updateDto) {
        const {
            title,
            short_desc,
            long_desc,
            category: categoryId
        } = updateDto;
        const blog = await this.findOneById(id);
        if (categoryId) {
            const category = await this.#categoryService.findOneById(categoryId);
            blog.category = category._id;
        }
        if (title) blog.title = title;
        if (short_desc) blog.short_desc = short_desc;
        if (long_desc) blog.long_desc = long_desc;

        await blog.save();

        return {
            message: "update"
        };
    }
    async delete (id) {
        const blog = await this.findOneById(id);
        await blogModel.deleteOne({_id: blog._id});
        return {
            message: "Deleted"
        };
    }
    async findAll () {
        const blogs = await blogModel.find({});
        return {
            blogs
        };
    }
    async findOneById (id) {
        if (isValidObjectId(id)) {
            const blog = await blogModel.findById(id);
            if (!blog) throw {status: 404, message: "not found blog"};
            return blog;
        }
        throw {
            status: 400,
            message: "object id is invalid"
        };
    }
}

module.exports = BlogService;