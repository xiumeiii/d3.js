var express = require('express');
var router = express.Router();

router.get('/sankeyInterpolation', function(req, res, next) {
    res.render('line', { title: '折线图' });
});
router.get('/naturalLogScale', function(req, res, next) {
    res.render('line', { title: '折线图' });
});
router.get('/inlineLabels', function(req, res, next) {
    res.render('line', { title: '折线图' });
});
router.get('/lineWithMissingData', function(req, res, next) {
    res.render('line', { title: '折线图' });
});
router.get('/rainbowPerceptualDistance', function(req, res, next) {
    res.render('line', { title: '折线图' });
});
router.get('/monotoneInterpolation', function(req, res, next) {
    res.render('line', { title: '折线图' });
});


module.exports = router;
