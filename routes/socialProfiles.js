var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET analytics listing. */
router.get('/', function(req, res) {
    knex.raw('select * from social_profiles')
        .then(function(data) {
            res.send(data.rows);
        })
});

module.exports = router;
