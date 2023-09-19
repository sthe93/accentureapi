const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3001;

// Enable CORS for all route
app.use(cors());

// Define a route to proxy the request to the external API
app.get('/api/caseStudies', async (req, res) => {
  try {
    // Make a request to the external API
    const response = await axios.get('https://zm6zxgq6hyhe3smi5krzsrk2fu0iidhh.lambda-url.us-east-1.on.aws');

    // Forward the response to the React app
    res.json(response.data);
  } catch (error) {
    // Handle errors here (e.g., return an error response)
    res.status(500).json({ error: 'Error fetching data from the API' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Proxy server is running on port ${port}`);
});
