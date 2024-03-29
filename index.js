// index.js
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const pricingRoutes = require('./routes/pricingRoutes');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api', pricingRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
