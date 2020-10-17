const express = require("express");
const DataUtils = require("../helpers/dataUtils");
const User = require("../models/users");
const UserDAO = require("../models/userDAO");
const routers = express.Router();


routers.post("/auth", (req, res) => {
    const user = new User(req.body);
    new UserDAO().authenticate(user, (r) => {
        res.json(r)
    })
})

routers.get("/", (req, res) => {
    DataUtils.select(User.table, (users) => {
        res.json(users);
    })
})

routers.post("/register", (req, res) => {
    const user = new User(req.body);
    DataUtils.insert(user, User.table, (users) => {
        res.json(users);

    })
})


module.exports = routers;