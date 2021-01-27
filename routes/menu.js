var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('menu', { title: 'My bar' });
});

module.exports = router;
