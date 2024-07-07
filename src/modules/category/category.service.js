const autoBind = require("auto-bind");
class CategoryService {
    constructor(){
        autoBind(this)
    }
    async create(categoryDto) {
        
    }
    async update(id, updateDto) {

    }
    async delete(id) {

    }
    async findAll() {

    }
    async findOneById(id) {

    }
}

module.exports = CategoryService;