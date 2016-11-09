var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('bar', { title: '柱状图22' });
});

module.exports = router;
