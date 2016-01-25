var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var port = 8000;

app.use(bodyParser.json());

app.get('/api', function (req, res) {
    res.status(200).json({ data: 'Welcome to the API' });
});

app.get('/api/data', function (req, res) {
    res.status(200).json({ data: 'landon' });
});

app.post('/api/data', function (req, res) {

    var query = req.body.data;

    res.status(200).json({query:query});
});

module.exports = app;

//spin up our app
app.listen(port, function(err){

    //check to see if there is an err
    if(err){
        //if there is, log it
        console.log(err);
    }

    //otherwise tell us that it is running
    console.log('Magic is happening on port ' + port);

});
