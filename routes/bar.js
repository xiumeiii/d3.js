var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('bar', { title: '柱状图' });
});

module.exports = router;
