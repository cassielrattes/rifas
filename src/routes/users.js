const express = require("express");
const DataUtils = require("../helpers/dataUtils");
const User = require("../models/users");
const UserDAO = require("../models/userDAO");
const routers = express.Router();

const redirectLogin = (req,res, next)  =>{
    if(!req.session.isAdmin) res.json('erou');
    next();
}

routers.post("/auth", (req, res) => {
    const user = new User(req.body);
    new UserDAO().authenticate(user, (r) => {
        const { is_admin, id_usuario} = r
        if (is_admin) req.session.isAdmin  = true;
        res.json(id_usuario);
    })
})

routers.get("/", (req, res) => {
    DataUtils.select(User.table, (users) => {
        res.json(users);
    })
})

routers.get("/admin", (req, res) => {
    if (req.session.isAdmin) res.json('admin') 
})


routers.post("/register", (req, res) => {
    const user = new User(req.body);
    DataUtils.insert(user, User.table, (users) => {
        res.json(users);

    })
})


module.exports = routers;