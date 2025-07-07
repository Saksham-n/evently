const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

// Serve static uploads only in development (Vercel does not persist files)
if (process.env.NODE_ENV !== 'production') {
  app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
}

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected successfully.'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use('/api/auth', require('../routes/auth'));
app.use('/api/events', require('../routes/events'));
app.use('/api/registrations', require('../routes/registrations'));

app.listen(PORT, () => {
  console.log(`Server is running`);
});

// Export the app for serverless deployment (Vercel)
module.exports = app;