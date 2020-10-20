const express = require("express");
const DataUtils = require("../helpers/dataUtils");
const User = require("../models/users");
const UserDAO = require("../models/userDAO");
const routers = express.Router();


routers.post("/auth", (req, res) => {
    const user = new User(req.body);
    new UserDAO().authenticate(user, (r) => {
        console.log(req.session)
        const { id_usuario, is_admin } = r;
        if (is_admin !== 0) req.session['isAdmin'] = true;
        res.json(id_usuario);
    })
})

routers.get("/", (req, res) => {
    DataUtils.select(User.table, (users) => {
        res.json(users);
    })
})

routers.get("/admin", (req, res) => {
    const sess = req.session;
    if (sess.isAdmin) res.json('admin');
    res.json('plebeu')
})


routers.post("/register", (req, res) => {
    const user = new User(req.body);
    DataUtils.insert(user, User.table, (users) => {
        res.json(users);

    })
})


module.exports = routers;