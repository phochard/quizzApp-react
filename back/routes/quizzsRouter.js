const express = require("express");
const router = express.Router();
const Quizz = require('../models/quizz');


router.get('/', (req, res) => {
    Quizz.find({})
        .populate('categories')
        .exec((err, datas) => {
            //console.log(JSON.stringify(datas));
            if (err) res.status(400).send(err);
            else res.send(datas);
        });
})

router.get('/:slug', (req, res) => {
    Quizz.findOne({ slug: req.params.slug }, (err, datas) => {
        if (err) res.status(400).send(err);
        res.send(datas);
    })
})

router.post('/', (req, res) => {
    let quizz = new Quizz(req.body)
    quizz.category = "5f2852b23adeaa2626fbf478";
    quizz.save((err) => {
        if (err) res.status(404).send(err);
        else res.send(quizz);
    })
})

module.exports = router;