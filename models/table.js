var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TableSchema = new Schema(
  {
    number_table: {type: Number, required: true},
    hall: {type: String, required: true, maxlength: 25},
    number_seats: {type: Number, required: true},
  }
);

TableSchema
.virtual('url')
.get(function () {
  return '/catalog/table/' + this._id;
});

module.exports = mongoose.model('Table', TableSchema);