// Require modules
require('dotenv').config() // inject .env into process.env
const express = require('express'); // http server
const mongoose = require('mongoose'); // talks to mongo db

// App variables
const app = express();
const port = 8000;

// Connect to database
mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})
// confirm connection
mongoose.connection.once('connected', () => console.log('Connected to mongoDB'));


// Routes
app.get('/', (req, res) => {
    res.send("Bookmark'd API")
})

// Tell the app to listen on port 8000
app.listen(port, () => {
    console.log('API server is running on port:' + port);
});