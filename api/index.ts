require('dotenv').config();

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const path = require('path');

app.use(express.static('public'));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

const puns = [
    { q: "Why did the tomato turn red?", a: "Because it saw the salad dressing!" },
    { q: "How do you organize a space party?", a: "You planet." },
    { q: "Why did the bicycle fall over?", a: "Because it was two-tired!" },
    { q: "What did the grape do when it got stepped on?", a: "Nothing but let out a little wine." },
    { q: "Why can't you give Elsa a balloon?", a: "Because she’ll let it go!" },
    { q: "How does a penguin build its house?", a: "Igloos it together!" },
    { q: "What kind of shoes do ninjas wear?", a: "Sneakers." },
    { q: "Why did the math book look sad?", a: "Because it had too many problems." },
    { q: "What do you call cheese that isn't yours?", a: "Nacho cheese!" },
    { q: "Why don't eggs tell each other secrets?", a: "Because they might crack up!" },
];



app.get('/', function (req, res) {
    let randomPun = puns[Math.floor(Math.random() * puns.length)];
    res.status(200).json(randomPun);
});

app.post('/', function (req, res) {
    if (req.body.q && req.body.a) {
            puns.push({q: req.body.q, a: req.body.a});
            res.status(201).json({"message": "Pun added"});
        }
    else {
        res.status(400).json({"message": "No pun received"});
    }
    
})

app.get('/puns', function (req, res) {
    res.status(200).json(puns);
});


app.listen(3002, () => console.log('Server ready on port 3002.'));

module.exports = app;
