var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET users listing. */
router.get('/', function (req, res) {
    knex.raw('select * from user_table')
        .then(function (user) {
            res.send(user.rows);
        })
});

//Post new user to database
router.post('/new', function (req, res, next) {
    knex.raw(`insert into user_table (email, password, firstName, lastName, userPhone ) values (
    '${req.body.email}', 
    '${req.body.password}', 
    '${req.body.firstName}',
    '${req.body.lastName}',
    '${req.body.userPhone}'
    )`)
        .then(() => {
        res.send('success')
})
});

module.exports = router;
