var express = require('express');
var morgan = require('morgan');
var postman = require('postman');
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.json());

// add your code here
var data = [
    {
        todoItemId: 0,
        name: 'an item',
        priority: 3,
        completed: false
    },
    {
        todoItemId: 1,
        name: 'another item',
        priority: 2,
        completed: false
    },
    {
        todoItemId: 2,
        name: 'a done item',
        priority: 1,
        completed: true
    }
];



var dataTwo = [
    {
        todoItemId: 4,
        name: 'an item',
        priority: 6,
        completed: false
    }
];


app.get('/', (req, res) => {
    res.status(200).send({ status: 'ok' });
});


app.get('/api/TodoItems', (req, res) => {
    res.status(200).send(data);
});

app.get('/api/TodoItems/:number', (req, res) => {
    var cat = data.find(todo => todo.todoItemId == req.params.number)
    res.json(cat)

});

app.post('/api/TodoItems/', (req, res) => {
    var dog = data.slice(todo => todo.todoItemId == req.params.number)
    res.status(201); res.json(dog[0])

});


app.delete('/api/TodoItems/:number', (req, res) => {
    var cat = data.find(todo => todo.todoItemId == req.params.number)
    res.json(cat)

});



module.exports = app;
