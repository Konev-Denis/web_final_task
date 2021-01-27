var Reservation = require('../models/reservation');
const { body, validationResult } = require('express-validator');

exports.reservation_create_post = (req, res, next) => {
        const errors = validationResult(req);
        var reservation = new Reservation({
            name: req.body.name,
            phone: req.body.phone,
            date_of_reservation: req.body.date_of_reservation,
            table: req.body.select
        })
        Reservation.find({date_of_reservation: reservation.date_of_reservation, table: reservation.table}, 'date_of_reservation table')
        .exec(function (err, same_date) {
            if (err) { return console.log(err) }
            else {
                if (same_date.length === 0 && errors.isEmpty()) {
                    reservation.save(function (err) {
                        if (err) { return next(err); }
                        res.redirect(reservation.url);
                    })
                } else {
                    res.render('reservation', { errors: [`К сожалению, столик "${reservation.table}"  уже занят, попробуйте выбрать другой столик.`],
                        reservation: reservation })
                }
            }
        })
    }

exports.reservation_detail = function(req, res, next) {
    Reservation.findById(req.params.id)
    .exec(function (err, info) {
        if (err) return res.render('reservation_detail', {title: 'Информация о брони'});
        res.render('reservation_detail', {title: 'Информация о брони', reservation: info});
    })}

exports.reservation_delete_post = function(req, res, next) {
    Reservation.findByIdAndRemove(req.body.id, function deleteGuest(err) {
        if (err) { return next(err); }
        res.redirect('/reservation')
    })
}