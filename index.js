const express = require('express');
const path = require('path');

const {BotDatabase} = require('./classes/database');
const database = new BotDatabase(path.resolve('/home/prod/ratingSaver/data/cronDatabase.sqlite'));

const app = express();
app.set('view engine', 'ejs');
app.use(express.static(path.resolve(__dirname)));

app.get('/', (req, res) => {
  res.send("API");
});

app.get('/api/user/:id', (req, res) => {
  const data = database.getUserRatings(req.params.id);
  res.send(data);
});

// 76561199031495861 -- Example ID

app.get('/view/:id', (req, res) => {
  const viewData = database.getUserRatings(req.params.id);
  res.render('index', {data:viewData});
});

// No process env needed (for me)

app.listen(3000, () => console.log(`Started on port 3k`));