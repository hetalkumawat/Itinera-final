const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

// Sign Up Route
router.post('/signup', async (req, res) => {
  console.log(req.body);
  const { name, email, password } = req.body;

  // Validate input fields
  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Please fill in all fields.' });
  }

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already in use.' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    // Optionally create a JWT token for the new user
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET || 'hetal',
      { expiresIn: '1h' } // Token expiration time
    ); 

    res.status(201).json({ message: 'User created successfully!', token });
  } catch (error) {
    console.error('Error during sign up:', error);
    res.status(500).json({ error: 'Server error.' });
  }
});

module.exports = router;
