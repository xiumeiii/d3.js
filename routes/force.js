var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('force', { title: '力导向图' });
});

module.exports = router;
