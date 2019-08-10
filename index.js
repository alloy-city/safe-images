const db = require("./db-connection");
const controller = require("./resource-controller");

console.log("Safe Images Project");
controller(db.connectToDB());
