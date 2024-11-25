const express = require('express');
const router = express.Router();
const fetchJobs = require('../services/jobScraper'); // Adjust path if necessary

// Test route to check if API is working
router.get('/', (req, res) => {
  res.send('API is working!');
});

// Define the /search route
router.get('/search', async (req, res) => {
  const description = req.query.description || 'developer'; // Default value
  const location = req.query.location || 'San Francisco, CA'; // Default value

  try {
    console.log(`Searching for jobs with: ${description} in ${location}`);
    await fetchJobs(description, location);
    res.send('Jobs fetched successfully. Check the console for results.');
  } catch (error) {
    console.error('Error fetching jobs:', error.message);
    res.status(500).send('Failed to fetch jobs.');
  }
});

module.exports = router;

