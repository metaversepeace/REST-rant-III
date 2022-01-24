//requiring express
const express = require('express')
//initializing express app variable
const app = express()


//making a homepage route
app.get('/', (req, res) => {
    res.send('We Did It')
})

//Opening the server to listen for connections
app.listen(3000)