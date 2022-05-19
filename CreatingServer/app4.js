const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

//express app
const app = express();

//connect to mongodb
const dbURI = 'mongodb+srv://nandweza:0108+2603@nodejscourse.crqut.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

//register view engine
app.set('view engine', 'ejs');

//middleware & static files.
app.use(express.static('public'));
app.use(morgan('dev'));

app.get('/', (req, res) => {
    const blogs = [
        {title: 'Yoshi and ninjas', snippet: 'djbfdsbfbidsiaidsgudhjncvnvifufidnckn'},
        {title: 'ninja swords', snippet: 'djbfdsbfbidsiaidsgudhjncvnvifufidnckn'},
        {title: 'Yoshi and yakuza', snippet: 'djbfdsbfbidsiaidsgudhjncvnvifufidnckn'}
    ];
    res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About page' });
});

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new blog' });
});

//404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});