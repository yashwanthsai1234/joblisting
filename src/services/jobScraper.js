const axios = require('axios');

async function fetchJobs(description, location) {
  const appId = 'b3f36bf6';  // Replace with your App ID
  const apiKey = 'a9fca199e7bb2295fb1a5cf10cf86c20'; // Replace with your API key
  const encodedLocation = encodeURIComponent(location);
  const url = `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=${appId}&app_key=${apiKey}&what=${description}&where=${encodedLocation}`;
  
  try {
    const response = await axios.get(url);
    const jobs = response.data.results;

    if (!jobs || jobs.length === 0) {
      console.warn("No jobs found for the given criteria.");
      return [];
    }

    // Transform and return jobs in a usable format
    return jobs.map((job) => ({
      title: job.title || "N/A",
      company: job.company?.display_name || "N/A",
      location: job.location?.display_name || "N/A",
      salary: job.salary_min && job.salary_max 
                ? `${job.salary_min} - ${job.salary_max}`
                : "N/A",
      description: job.description || "No description available.",
      url: job.redirect_url || "#",
    }));
  } catch (error) {
    console.error("Error fetching jobs:", error.message);
    return []; // Return an empty array to avoid breaking the caller
  }
}

module.exports = fetchJobs;

