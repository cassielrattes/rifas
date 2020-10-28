const express = require("express");
const DataUtils = require("../helpers/dataUtils");
const Sorteio = require("../models/sorteios");
const routers = express.Router();


routers.get("/", (req, res) => {
    DataUtils.select(Sorteio.table, (sorteios) => {
        res.json(sorteios);
    })
})

routers.get("/:id_rifa", (req, res) => {
    const sorteios = req.params.id_rifa; 
    console.log(sorteios);
    DataUtils.innerJoin(sorteios, (sorteios) => {
        res.json(sorteios);
    })
})

routers.post("/", (req, res) => {
    const sorteios = new Sorteio(req.body);
    DataUtils.insert(sorteios, Sorteio.table, (sorteios) => {
        res.json(sorteios);
    })
})


module.exports = routers;