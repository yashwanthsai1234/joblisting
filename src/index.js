const express = require('express');

const app = express();
const jobRoutes = require('./routes/jobRoutes'); 
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Use job routes
app.use('/', jobRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
