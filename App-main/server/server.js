const path = require('path');
const express = require('express');
const colors = require('colors');
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./db');
//const fs = require('fs');
//const dotenv = require('dotenv').config({ path: path.resolve(__dirname, '.env') });


// Load environment variables from .env
//console.log('Loaded environment variables:', dotenv.parsed);



const app = express();
const port = process.env.PORT || 5003;

connectDB()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//routes 
app.use('/api/tasks', require('./routes/taskRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
// Original route for fetching the server message
app.get('/api/getMessage', (req, res) => {
    const os = require('os');
    const serverName = os.hostname(); // Get the server name
    const message = `This App procceded by server : ${serverName}`;
    res.json({ message });
  });


// Serve the client
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../', 'client', 'build', 'index.html')));
} else {
    app.get('/', (req, res) => res.send('Set to production Please'));
}

app.use(errorHandler);

// Connect to DB before listening
        console.log(`Server is listening on port ${port}`);

