const express = require("express");
const routers = express.Router();

routers.use("/users", require("./users"));
routers.use("/rifas", require("./rifas"));
routers.use("/sorteios", require("./sorteios"));

module.exports = routers;