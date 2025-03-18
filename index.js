const express = require('express');
const rateLimit = require('express-rate-limit');
const path = require('path');
const quotes = require('./quotes');
const app = express();

const limiter = rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 200,
    handler: (req, res) => {
        res.status(429).json({
            message: 'Too many requests from this IP, please try again after 10 minutes'
        });
    }
});
app.use(limiter);

app.use(express.static(__dirname));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Uncomment if you have a Docs.html file in the root directory
// app.get("/docs", (req, res) => {
//     res.sendFile(path.join(__dirname, 'Docs.html'));
// });

app.get("/api/quotes", (req, res) => {
    const category = req.query.category ? req.query.category.toLowerCase() : null;
    const limit = req.query.limit ? parseInt(req.query.limit) : null;
    let filteredQuotes = quotes;

    if (category) {
        filteredQuotes = quotes.filter(q => q.category.toLowerCase() === category);
    }

    if (limit) {
        filteredQuotes = filteredQuotes.slice(0, limit);
    }

    if (filteredQuotes.length > 0) {
        res.status(200).json(filteredQuotes);
    } else {
        res.status(404).send({ message: 'No quotes found for this category :-(' });
    }
});

app.get("/api/random", (req, res) => {
    const category = req.query.category ? req.query.category.toLowerCase() : null;
    const limit = req.query.limit ? parseInt(req.query.limit) : 1;
    let filteredQuotes = quotes;

    if (category) {
        filteredQuotes = quotes.filter(q => q.category.toLowerCase() === category);
    }

    if (filteredQuotes.length > 0) {
        const randomQuotes = [];
        for (let i = 0; i < limit; i++) {
            const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
            randomQuotes.push(filteredQuotes[randomIndex]);
        }
        res.status(200).json(randomQuotes);
    } else {
        res.status(404).send({ message: 'No quotes found for this category :-(' });
    }
});

app.get('/api/quotes/id/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const quote = quotes.find(q => q.id === id);

    if (quote) {
        res.status(200).json(quote);
    } else {
        res.status(404).send({ message: 'Quote not found please try again with different id :-(' });
    }
});

app.get('/api/quotes/category/:category', (req, res) => {
    const category = req.params.category.toLowerCase();
    const filteredQuotes = quotes.filter(q => q.category.toLowerCase() === category);

    if (filteredQuotes.length > 0) {
        res.status(200).json(filteredQuotes);
    } else {
        res.status(404).send({ message: 'No quotes found for this category :-(' });
    }
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ message: 'Something went wrong!' });
});

module.exports = app;