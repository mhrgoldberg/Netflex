const express = require('express');
const router = express.Router();

const movies = require('../../models/Movie');

router.post('/', function(req, res, next) {
  // eval.require('locus');
  console.log(req.body);
  let q = req.body.body;

  movies.find({title : {$regex: q, $options: 'i'}}, function (err, data) {res.json(data)}).sort({ date: -1 })
    .then(movies)
  ;
  
});

module.exports = router;