let mongoose = require("mongoose");
const uri = "mongodb://localhost:27017/alloy";

mongoose.Promise = Promise;
mongoose.connect(uri, {
    useNewUrlParser: true,
    promiseLibrary: global.Promise
});

let db = mongoose.connection;

function connectToDB(){
    db.on("error", console.error.bind(console, "connection error:"));
    db.once("open", () => {
        console.log(`Connected to Mongo at: ${new Date()}`);
    });

    return db;
}

module.exports = { connectToDB };
