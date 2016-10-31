var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('line', { title: 'd3Line' });
});

module.exports = router;
