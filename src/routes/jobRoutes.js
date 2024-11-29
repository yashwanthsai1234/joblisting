const express = require('express');
const axios = require('axios');
const fetchJobs = require('../services/jobScraper'); // Your existing job fetcher

const router = express.Router();

// Function to call similarity API
async function getSimilarityScore(resume, jobDescription) {
  console.log('Calling similarity API with provided resume and job description...');
  try {
    const response = await axios.post('http://127.0.0.1:5000/match', {
      resume,
      job_description: jobDescription,
    });
    console.log('Similarity API response received:', response.data);
    return response.data.similarity_percentage;
  } catch (error) {
    console.error('Error calling similarity API:', error.message);
    return null; // Default to null if the service fails
  }
}

// Search jobs route
router.get('/search', async (req, res) => {
  console.log('Search route accessed');
  const description = req.query.description || 'developer';
  const location = req.query.location || 'San Francisco, CA';

  console.log(`Fetching jobs with description: ${description} and location: ${location}`);

  // Example resume text (could be dynamically fetched)
  const resumeText = "Experienced developer skilled in Node.js, JavaScript, and cloud technologies.";
  console.log('Using resume text:', resumeText);

  try {
    const jobs = await fetchJobs(description, location); // Existing job fetch logic
    console.log('Jobs fetched:', jobs.length, 'job(s) found.');

    // Enrich jobs with match scores
    const enrichedJobs = await Promise.all(
      jobs.map(async (job) => {
        console.log(`Processing job: ${job.title} at ${job.company.display_name}`);
        const matchScore = await getSimilarityScore(resumeText, job.description);
        console.log(`Match score for job ${job.title}:`, matchScore);
        return { ...job, matchScore };
      })
    );

    console.log('Enriched jobs with similarity scores:', enrichedJobs);
    res.json(enrichedJobs); // Return jobs with scores
  } catch (error) {
    console.error('Error fetching jobs:', error.message);
    res.status(500).send('Failed to fetch jobs with scores.');
  }
});

module.exports = router;
