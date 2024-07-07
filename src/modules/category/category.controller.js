const autoBind = require("auto-bind");
const CategoryService = require("./category.service");

class CategoryController {
    #service;
    constructor() {
        autoBind(this);
        this.#service = new CategoryService();
    }

    async create (req, res, next) {
        try {
            const result = await this.#service.create(req.body);
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
    async update (req, res, next) {
        try {
            const result = await this.#service.update('', {});
            return res.json(result);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = {
    categoryController: new CategoryController()
};