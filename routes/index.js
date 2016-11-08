var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '柱状图' });
});
//$('.dropdown li').click(function(){
//  $(this).find("a").text()
//});
//router.get('/getUser', function(req, res, next) {
//  res.send({
//    'user':'aaa'
//  })
//});


module.exports = router;
