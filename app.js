const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');
const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

//Listening on root
app.get('/todo/', function (req, res) {
  const todos = [
    {"list_item": "Learn Node basics"},
    {"list_item": "Learn Express basics"},
    {"list_item": "Learn Mustache"},
    {"list_item": "Learn HTML forms with Express"},
    {"list_item": "Learn about authentication"},
    {"list_item": "Learn how to connect to PostgreSQL"},
    {"list_item": "Learn how to create databases"},
    {"list_item": "Learn SQL"},
    {"list_item": "Learn how to connect to PostgreSQL from Node"},
    {"list_item": "Learn how to Sequelize"}
  ]
  res.render('todo', {todo: todos});
})

app.listen(3000, function () {
  console.log('Successfully started express application!');
})
