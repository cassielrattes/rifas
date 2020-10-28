const express = require("express");
const DataUtils = require("../helpers/dataUtils");
const Rifa = require("../models/rifas");
const routers = express.Router();


routers.get("/", (req, res) => {
    DataUtils.select(Rifa.table, (rifas) => {
        res.json(rifas);
    })
})

routers.get("/:id_rifa", (req, res) => {
    const rifas= req.params.id_rifa;
    console.log(rifas);
    DataUtils.getById(rifas, (rifas) => {
        res.json(rifas);
    })
})


routers.post("/", (req, res) => {
    const rifas = new Rifa(req.body);
    DataUtils.insert(rifas, Rifa.table, (rifas) => {
        res.json(rifas);
    })
})


module.exports = routers;
