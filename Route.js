const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public'))

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
     res.send(' Welcome to Home page');

 // res.send('hello world')
})



app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))