var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('play', { title: '随便玩玩' });
});

module.exports = router;
