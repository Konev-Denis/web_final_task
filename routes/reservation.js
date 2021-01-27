var express = require('express');
var router = express.Router();

var reservation_controller = require('../controllers/reservationController');

router.get('/', function(req, res, next) {
    res.render('reservation', { title: 'My bar' });
});

router.post('/c', reservation_controller.reservation_create_post);
router.post('/delete', reservation_controller.reservation_delete_post);
router.get('/catalog/:id', reservation_controller.reservation_detail);

module.exports = router;
