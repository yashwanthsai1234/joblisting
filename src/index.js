const express = require('express');
const app = express();

// Import the job routes (adjust the path as needed)
const jobRoutes = require('./routes/jobRoutes'); 

// Middleware to parse JSON (optional but recommended)
app.use(express.json());

// Register the route for jobs under the `/jobs` endpoint
app.use('/api', jobRoutes);

// Start the server
const PORT = process.env.PORT || 3000; // Default to port 3000 if not specified
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

