const express = require("express");
const router = express.Router();

router.get('/', function(req, res) {
    res.render('index', {
        title: "Quizz-Node-App",
        subtitleOne: "Catégories",
        subtitleTwo: "Derniers quizzs"
    });

});

module.exports = router;