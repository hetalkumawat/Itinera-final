const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const tripRoutes = require('./routes/trip');

dotenv.config(); 
const app = express();
const PORT = process.env.PORT || 7000;

// Connect to MongoDB
connectDB();
 
// Middleware
const cors = require('cors');

app.use(cors({
  origin: ['http://localhost:5173', 'https://itiinera.netlify.app/'],
  methods: 'GET,POST,PUT,DELETE',
  credentials: true
}));

app.use(express.json());



 // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded
 // Parse JSON requests

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/trip', tripRoutes);


// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
