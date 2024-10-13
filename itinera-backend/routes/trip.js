// routes/trips.js
const express = require('express');
const Trip = require('../models/Trip');
const router = express.Router();

// POST: Create a new trip
router.post('/create', async (req, res) => {
  try {
    const { tripName, destination, startDate, endDate, budget } = req.body;
    const newTrip = new Trip({ tripName, destination, startDate, endDate, budget });
    await newTrip.save();
    res.status(201).json(newTrip);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create trip' });
  }
});

// GET: Fetch all trips
router.get('/all', async (req, res) => {
  try {
    const trips = await Trip.find();
    res.status(200).json(trips);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch trips' });
  }
});
router.delete('/delete/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Trip.findByIdAndDelete(id);
    res.status(200).json({ message: 'Trip deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete trip', error });
  }
});

module.exports = router;
