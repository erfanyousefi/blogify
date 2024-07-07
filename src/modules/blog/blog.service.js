const autoBind = require("auto-bind");

class BlogService {
    constructor(){
        autoBind(this)
    }
    async create(blogDto) {
        
    }
    async update(id, updateDto) {

    }
    async delete(id) {

    }
    async findAll() {

    }
    async findOneById(id) {

    }
    async findOneBySlug(slug) {

    }
}

module.exports = BlogService;