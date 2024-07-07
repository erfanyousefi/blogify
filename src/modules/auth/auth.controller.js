const autoBind = require("auto-bind");
const AuthService = require("./auth.service");

class AuthController {
    #service
    constructor() {
        autoBind(this)
        this.#service = new AuthService();
    }

    async signup(req, res, next){
        try {
            const result = await this.#service.signup({});
            return res.json({
                message: "signup successfully, please login on your account "
            })
        } catch (error) {
            next(error)
        }
    }
    async login(req, res, next){
        try {
            const result = await this.#service.login({});
            return res.json(result)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = {
    authController: new AuthController()
}