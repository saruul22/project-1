const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/time', (req, res) => {
    res.send('the current time is ' + (new Date()).toLocaleTimeString());
});

app.listen(8000, () => {
    console.log('listening on localhost:8000');
});