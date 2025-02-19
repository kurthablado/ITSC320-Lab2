/**
 * Express Server to create an API endpoint to access login data
**/


const express = require('express');
const path = require('path');
const app = express();
const PORT = 5000;
const cors = require('cors');

app.use(cors()); // Use cors to allow requests from the frontend

// Get the users.json file
app.get('/api/users', (req, res) => {
    res.sendFile(path.join(__dirname, 'data', 'users.json'))
});

// Start the server and listen on port 5000
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});