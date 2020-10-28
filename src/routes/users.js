const express = require("express");
const DataUtils = require("../helpers/dataUtils");
const User = require("../models/users");
const UserDAO = require("../models/userDAO");
const routers = express.Router();



routers.post("/auth", (req, res) => {
    const user = new User(req.body);
    new UserDAO().authenticate(user, (r) => {
        if(r) {
            const { is_admin, id_usuario } = r
            req.session.id_usuario = id_usuario;
            if (is_admin) req.session.isAdmin = 1 ;
            res.json(id_usuario);
        } else {
            res.status(401).send("Error")
        } 
        
    })
})

routers.get("/", (req, res) => {
    DataUtils.select(User.table, (users) => {
        res.json(users);
    })
})

routers.get("/admin", (req, res) => {
    if (req.session.isAdmin) {
        res.json('admin')
    } else {
        res.json('plebeu')
    }

})

routers.delete("/sair", (req, res) => {
    req.session.destroy(() => {
        res.json("Destroyed")
        console.log('teste');
    })


})


routers.post("/register", (req, res) => {
    const user = new User(req.body);
    DataUtils.insert(user, User.table, (users) => {
        res.json(users);
    })
})


module.exports = routers;