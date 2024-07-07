const { default: mongoose } = require("mongoose");

async function connectToMongoDB() {
    await mongoose.connect(process.env.MONGO_URL, {}).then(() => {
        console.log("Connected to database");
    }).catch(err => {
        console.log(err?.message);
    })
}

module.exports = connectToMongoDB