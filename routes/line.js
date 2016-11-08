var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('line', { title: '折线图' });
});

module.exports = router;
