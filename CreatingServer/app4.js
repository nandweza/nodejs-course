const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

//express app
const app = express();

//connect to mongodb
const dbURI = 'MongoDB URI';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

//register view engine
app.set('view engine', 'ejs');

//middleware & static files.
app.use(express.static('public'));
app.use(morgan('dev'));

//mongoose and mongo sandbox routes
app.get('/add-blog', (req, res) => {
    const blog = Blog({
        title: 'New Blog2',
        snippet: 'About my new blog',
        body: 'More about my new blog'
    });

    //saving to our database.
    blog.save()
      .then((result) => {
        res.send(result)
      })
      .catch((err) => {
        console.log(err);
      });
})

app.get('/all-blogs', (req, res) => {
    Blog.find()
      .then((result) => {
            res.send(result);
        })
      .catch((err) => {
            console.log(err);
        });
});

app.get('/single-blog', (req, res) => {
    Blog.findById('6286863daa33e7d124c3c44a')
      .then((result) => {
          res.send(result)
      })
      .catch((err) => {
          console.log(err);
      })
})

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
