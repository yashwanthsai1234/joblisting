# Job Search Aggregator

## Overview
The **Job Search Aggregator** is a comprehensive tool designed to streamline the job search process by integrating job listings from APIs like Adzuna and calculating personalized match scores for each job based on the user’s resume. This system combines modern web technologies and AI-driven insights to deliver highly relevant job opportunities tailored to user profiles.

---

## Features
- **Job Search Aggregation**: Fetches real-time job listings from external APIs based on user-defined criteria such as job title and location.
- **Resume Matching**: Leverages a Hugging Face transformer-based language model to calculate match scores between job descriptions and user resumes.
- **PDF Parsing**: Uses `pdfplumber` to extract and analyze text content from PDF resumes.
- **Backend Services**: Powered by **Node.js**, **Express.js**, and **Flask** for a seamless integration of job data and AI-driven match scoring.

---

## Tools and Technologies
- **Backend**: Node.js, Express.js, Flask
- **Frontend**: (Future Scope) Next.js
- **AI/ML**: Hugging Face transformer-based LLM
- **APIs**: Adzuna Job Search API
- **Utilities**: pdfplumber, Axios

---

## Future Scope
1. **Website Integration**: Expand the application into a fully functional web platform using **Next.js**, providing a modern, responsive user interface.
2. **User Accounts and Preferences**: Enable users to create profiles, upload resumes, and save job searches for a more personalized experience.
3. **Open Source Contributions**: Make the repository open source, inviting developers to contribute new features and improvements.
4. **Enhanced AI Capabilities**: Explore advanced AI models for improved job-resume matching, including multi-modal analysis of visual and textual resume data.
5. **Expanded Job Sources**: Integrate additional job search APIs for wider coverage and better opportunities.

---

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- Python (v3.8 or higher) and Flask
- Adzuna API credentials
- Hugging Face model and token

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yashwanthsai1234/job-search-aggregator.git
   cd job-search-aggregator
   ```
2. Install backend dependencies:
   ```bash
   npm install
   ```
3. Set up the Flask API for match score computation:
   ```bash
   cd flask_api
   pip install -r requirements.txt
   python app.py
   ```
4. Run the Node.js server:
   ```bash
   npm start
   ```

### Usage
Access the job search feature via:
```bash
curl "http://localhost:3000/api/search?description=developer&location=San%20Francisco"
```

---

## Contributing
We welcome contributions to enhance the Job Search Aggregator. Please fork the repository, create a feature branch, and submit a pull request.

---

## License
This project is licensed under the MIT License. See the LICENSE file for details.

---

## Contact
For any inquiries, please contact [Your Name](mailto:your.email@example.com).

