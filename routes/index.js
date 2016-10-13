var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'd3Demo' });
});

//router.get('/getUser', function(req, res, next) {
//  res.send({
//    'user':'aaa'
//  })
//});


module.exports = router;
