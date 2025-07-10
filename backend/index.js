// index.js
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

const Staff = require("./models/Staff");
const Region = require('./models/Region');
const Client = require('./models/Client');
const ClientUser = require('./models/clientUsers');
const StaffDetails = require('./models/StaffDetails');

const bcrypt = require("bcrypt");
const clientRoutes = require('./routes/clientRoutes');

dotenv.config();
const PORT = process.env.PORT || 5000;
connectDB();

const app = express();

// ✅ CORS middleware - Allow all origins (dev only)
app.use(cors()); // or use { origin: 'http://localhost:8081' } if you want to restrict

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Loan Management System API');
});

// 👇 Register your routes after enabling CORS
app.use('/clientsAPI', clientRoutes);

app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
