const autoBind = require("auto-bind");

class AuthService {
    constructor(){
        autoBind(this)
    }
    async signup(userDto) {
        
    }
    async login(loginDto) {

    }
    async signAccessToken(userDto) {

    }
    async checkAccessToken(userDto) {

    }
}

module.exports = AuthService;