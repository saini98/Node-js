const express = require('express');
const chalk = require('chalk');
const app = express();
const path = require('path');
const hbs = require('hbs');
const { title } = require('process');

console.log(__dirname);
console.log(__filename);
console.log(path.join(__dirname, '../public'));

// Define path for Express js config
const publicDirPath = path.join(__dirname, '../public');
const templateDirPath = path.join(__dirname, '../templates/views');
const partialDirPath = path.join(__dirname, '../templates/partials');


// setup handlebars engine  and views locations
app.set('view engine', 'hbs');
app.set('views', templateDirPath);

hbs.registerPartials(partialDirPath)

//setup static dir to serve
app.use(express.static(publicDirPath));

app.get('', (req, res) => {
    res.render('index', {
        title: 'weather app',
        name: 'Sahil Saini',
        footer: 'Weather footer'
    })
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Page',
        about: 'Hi I am Sahil Saini',
        name: 'Sahil Saini'
    })
});

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help Page',
        message: 'What kind of help do you want?',
        name: 'Sahil Saini'
    })
});

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Sahil Saini',
        errorMesage: 'Help article not found'
    });
});

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Sahil Saini',
        errorMesage: 'Page Not Found !'
    })
});

// get method requires 2 param first one is path or page name /about and second one is callback function.

// app.get('', (req, res) => {
//     res.send('<h1>Hello Express</h1>');
// });

// app.get('/help', (req, res) => {
//     res.send({
//         name: "Sahil Saini",
//         age: "26"
//     });
// })

// app.get('/about', (req, res) => {
//     res.send('<h1>About Page</h1>');
// })


// app.get('/weather', (req, res) => {
//     res.send({
//         forecast: "It is Raining",
//         location: "Delhi"
//     });
// })



app.listen(3000, ()=> {
    console.log(chalk.green('Server is up on port 3000'))
})