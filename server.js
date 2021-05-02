// Require modules
require('dotenv').config()          // inject .env into process.env
const express = require('express'); // http server
const cors = require('cors');       // expose resources for external websites
const mongoose = require('mongoose'); // talks to mongo db

// App variables
const app = express();
const port = process.env.PORT || 8000;

// Connect to database
mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})
// confirm connection
mongoose.connection.once('connected', () => console.log('Connected to mongoDB'));

// Middleware for CRUD & controller routing
app.use(express.json());        // reads incoming PUT/POST as json

app.use((req, res, next) => {
    console.log(req.body);      // logging the request
    next();                     // run next middleware func
});

app.use(cors());                // exposes endpoints for apps to request

// Routes
app.get('/', (req, res) => {
    res.send("Bookmark'd API")
});

app.use('/bookmarks', require('./controllers/bookmarksController'));

// Tell the app to listen on port 8000
app.listen(port, () => {
    console.log('API server is running on port:' + port);
});