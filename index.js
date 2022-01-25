require('dotenv').config();

//requiring express
const express = require('express');
//initializing express app variable
const app = express();


//making a homepage route
app.get('/', (req, res) => {
    res.send('We Did It')
});

//making a wildcard route
app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
});

//Opening the server to listen for connections
app.listen(process.env.PORT);