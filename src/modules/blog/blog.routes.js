const {Router} = require("express");
const {blogController} = require("./blog.controller");
const router = Router();
router.get("/", blogController.findAll)
router.get("/:slug", blogController.findBySlug)
router.post("/", blogController.create)
router.put("/:id", blogController.update)
router.delete("/:id", blogController.delete)
module.exports = {
    blogRouter: router
}