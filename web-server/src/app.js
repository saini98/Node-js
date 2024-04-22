const express = require('express');
const chalk = require('chalk');
const app = express();
const path = require('path');
const hbs = require('hbs');
const { title } = require('process');
const calculator = require('./utils/calculator');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

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

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: "Please provide address"
        })
    }

    geocode(req.query.address, (error, {latitude, longitude, location} = {}) => {
        if(error) {
            return res.send({error})
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if(error) {
                return res.send({error})
            }
            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
    })
    // res.send({
    //     forecast: "It is Raining",
    //     location: "Delhi",
    //     address: req.query.address
    // });
});

app.get('/product', (req, res) => {
    console.log(req.query, 'reqqq')
    console.log(req.query.search, 'searchj')
    if(!req.query.search) {
        return res.send({
            error: 'You must provide a search'
        })
    }
    res.send({
        product: []
    })
});

app.get('/calculation', (req, res) => {
    if(!req.query.firstValue) {
        return res.send({
            error: "Please provide first value"
        })
    } else if (!req.query.secondValue) {
        return res.send({
            error: "Please provide second value"
        })
    }  else if (!req.query.calculate) {
        return res.send({
            error: "Please provide add/subtract/divide/multiplication"
        })
    } 
    else {
        calculator(req.query.firstValue, req.query.secondValue, req.query.calculate)
        res.send({
            firstValue: (JSON.parse(req.query.firstValue) * JSON.parse(req.query.secondValue)),
            secondValue: req.query.secondValue,
            calculate: req.query.calculate
        })
    }
})

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






app.listen(3000, ()=> {
    console.log(chalk.green('Server is up on port 3000'))
})