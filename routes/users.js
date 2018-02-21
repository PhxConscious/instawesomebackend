let express = require('express');
let router = express.Router();
let knex = require('../db/knex');

/* GET users listing. */
router.get('/', function(req, res) {
  knex.raw('select * from user_table')
    .then(function(data) {
      res.send(data.rows);
    })
});

//Post new user to database
router.post('/new', function(req, res, next) {
  knex.raw(`insert into user_table (first_name, last_name, user_email, user_phone, firebase_id ) values (
    '${req.body.first_name}',
    '${req.body.last_name}',
    '${req.body.user_email}',
    '${req.body.user_phone}',
    '${req.body.firebase_id}'
    )`)
    .then(() => {
      res.send('success')
    })
});

//Show single user
router.get('/users', function (req, res, next) {
    knex.raw(`select * from user_table`)
        .then(function (user) {
            res.send(user)
        })
});

module.exports = router;
