const { config } = require("dotenv");
const express = require("express");
const connectToMongoDB = require("./src/config/mongoose.config");
const { MainRouter } = require("./src/modules/index.routes");
config();
async function main() {
    const app = express();
    connectToMongoDB()
    app.use(express.json());
    app.use(express.urlencoded({extended: true}))
    app.use(MainRouter);
    app.use((req, res, next) => {
        return res.status(404).json({
            message: "not found address"
        })
    })
    const PORT = process.env.PORT;
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    })
}

main();