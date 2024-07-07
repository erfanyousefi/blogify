const {Router} = require("express");
const {authController} = require("./auth.controller");
const router = Router();
router.post("/login", authController.login)
router.post("/signup", authController.signup)
module.exports = {
    authRouter: router
}