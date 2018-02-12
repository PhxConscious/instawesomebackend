var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET users listing. */
router.get('/', function (req, res) {
    knex.raw('select * from users')
        .then(function (user) {
            res.send(user.rows);
        })
});

module.exports = router;
