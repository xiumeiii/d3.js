var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('pie', { title: '饼状图' });
});

module.exports = router;
