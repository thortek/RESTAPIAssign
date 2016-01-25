var express = require('express');
var app = express();
var port = 8000;

app.get('/api', function (req, res) {
    res.status(200).json({ data: 'landon' });
});

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
