const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  destination: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  activities: { type: [String], required: true },
  notes: { type: String },
});

const Trip = mongoose.model('Trip', tripSchema);
module.exports = Trip;
