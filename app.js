var express1 = require('express');

var app = express1();

app.set('view engine', 'ejs');

app.get('/', function (req1, res1) {
    res1.send('Testing Node Js with Express JS');
});

app.get('/home', function (req1, res1) {
    res1.sendFile(__dirname + '/index.html');
});

app.get('/profile/:name', function (req1, res1) {
    var data={age:40, job: 'ninja'}
    res1.render('profile',{person: req1.params.name, data:data});
});

app.listen(3000);
