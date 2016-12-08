const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const knex = require('./db/knex');

const port = process.env.PORT || 3000;
app.listen(port, () =>{
  console.log(`Listening on ${port}`);
});

app.get('/nba_teams',(req,res)=>{
  knex('nba_teams').then(function(teams){
    res.json(teams);
  })
})

app.get('/nba_teams/:wins',(req,res)=>{
  knex('nba_teams').where('wins', req.params.wins).then(function(teams){
    res.json(teams);
  });
})
