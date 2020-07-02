const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public'))

// respond with "hello world" when a GET request is made to the homepage
app.get('index.html', function (req, res) {
     res.sendFile(__dirname + '/index.html');

 // res.send('hello world')
})

app.get('/getdata', function (req, res) {
    
    response ={
        firstname:req.query.rows,
        lastname:req.query.columns
    };
      console.log(response);
     res.end(JSON.stringify(response));

 // res.send('hello world')
})

/*
app.get('/', function (req, res) {
 // res.send('x')
     //   res.sendFile('index.html');
 res.sendFile(__dirname + '/index.html');

})*/

//app.use(express.static(path.join(__dirname, 'public'), {index: '_'}));


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))