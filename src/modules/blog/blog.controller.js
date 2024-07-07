const autoBind = require("auto-bind");
const BlogService = require("./blog.service");

class BlogController {
    #service;
    constructor() {
        autoBind(this);
        this.#service = new BlogService();
    }

    async create (req, res, next) {
        try {
            const blogData = req.body;
            const result = await this.#service.create(blogData);
            return res.json(result);
        } catch (error) {
            next(error);
        }
    }
    async delete (req, res, next) {
        try {
            const result = await this.#service.delete(req.params.id);
            return res.json(result);
        } catch (error) {
            next(error);
        }
    }
    async findAll (req, res, next) {
        try {
            const result = await this.#service.findAll();
            return res.json(result);
        } catch (error) {
            next(error);
        }
    }
    async findBySlug (req, res, next) {
        try {
            const result = await this.#service.findOneBySlug();
            return res.json(result);
        } catch (error) {
            next(error);
        }
    }
    async update (req, res, next) {
        try {
            const result = await this.#service.update(req.params.id, req.body);
            return res.json(result);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = {
    blogController: new BlogController()
};