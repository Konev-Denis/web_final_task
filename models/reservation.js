var mongoose = require('mongoose');
var moment = require('moment');

var Schema = mongoose.Schema;

var ReservationSchema = new Schema(
  {
    name: {type: String, required: true, maxlength: 25},
    phone: {type: String, required: true, maxlength: 25},
    date_of_reservation: {type: Date, required: true},
    table: { type: String, required: true, maxlength: 5},
  }
);

ReservationSchema
.virtual('url')
.get(function () {
  return '/reservation/catalog/' + this._id;
});

ReservationSchema
.virtual('date')
.get(function () {
  return this.date_of_reservation ? moment(this.date_of_reservation).format('YYYY-MM-DD') : '';
});

module.exports = mongoose.model('Reservation', ReservationSchema);