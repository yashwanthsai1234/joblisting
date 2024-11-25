const axios = require('axios');
async function fetchJobs(description, location){
	const appId = 'b3f36bf6';  // Replace with your App ID
	const apiKey = 'a9fca199e7bb2295fb1a5cf10cf86c20'; // Replace with your API key
	const encodedLocation = encodeURIComponent(location);
	const url = `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=${appId}&app_key=${apiKey}&what=${description}&where=${encodedLocation}`;
        
 try {
    const response = await axios.get(url);
    const jobs = response.data.results;

    jobs.forEach((job) => {
      console.log(`Title: ${job.title}`);
      console.log(`Company: ${job.company.display_name}`);
      console.log(`Location: ${job.location.display_name}`);
      console.log(`Salary: ${job.salary_min} - ${job.salary_max}`);
      console.log(`Description: ${job.description}`);
      console.log(`URL: ${job.redirect_url}`);
      console.log('---');
    });
  } catch (error) {
    console.error("Error fetching jobs:", error.message);
    throw error; // Ensure error is propagated back to the caller
  }
}

module.exports = fetchJobs;



