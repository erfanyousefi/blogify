const {Router} = require("express");
const {categoryController} = require("./category.controller");
const router = Router();
router.get("/", categoryController.findAll)
router.post("/", categoryController.create)
router.put("/:id", categoryController.update)
router.delete("/:id", categoryController.delete)
module.exports = {
    categoryRouter: router
}