const {Router} = require("express");
const { authRouter } = require("./auth/auth.routes");
const { blogRouter } = require("./blog/blog.routes");
const { categoryRouter } = require("./category/category.routes");
const router = Router();
router.get("/", (req, res, next) => {
    return res.json({
        message: "welcome to my express application"
    })
})
router.use("/auth", authRouter)
router.use("/blog", blogRouter)
router.use("/category", categoryRouter)
module.exports = {
    MainRouter: router
}