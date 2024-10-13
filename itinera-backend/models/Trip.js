// models/Trip.js
const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  tripName: String,
  destination: String,
  startDate: Date,
  endDate: Date,
  budget: Number,
});

const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;
