const express = require("express");
const router = express.Router();
const Category = require('../models/category');

router.get('/', (req, res) => {
    Category.find((err, datas) => {
        if (err) res.status(400).send(err);
        else res.send(datas);
    })
})

router.get('/:slug', (req, res) => {
    Category.findOne({ slug: req.params.slug }, (err, datas) => {
        if (err) res.status(400).send(err);
        res.send(datas);
    })
})

router.post('/', (req, res) => {
    let category = new Category(req.body)
    category.save((err) => {
        if (err) res.status(404).send(err);
        res.send(category);
    })
})

module.exports = router;