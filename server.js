// Require modules
require('dotenv').config() // inject .env into process.env
const express = require('express'); // http server

// Create the Express app
const app = express();

// Routes
app.get('/', (req, res) => {
    res.send("Bookmark'd API")
})

// Tell the app to listen on port 8000
const port = 8000;

app.listen(port, () => {
    console.log('app is running on port: ' + port);
});