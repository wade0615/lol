var express = require('express');
var router = express.Router();
var Client = require('node-rest-client').Client;
var client = new Client();
/* GET users listing. */
const sportsDataIO = {
  teams: router.get('/', function(req, res, next) {
      let queries = req.query;
      let url='https://fly.sportsdata.io/v3/lol/scores/json/Teams?key=e1ed7a271abe4b569d408758dec7dafb';
      var options = {
          host: url,
          method: 'GET'
        };
      
      client.get(url, function (data, response) { 
          res.json({...data})
      });
  }),
  gamesByDate: router.get('/', function(req, res, next) {
      let url='https://fly.sportsdata.io/v3/lol/scores/json/GamesByDate/2021-03-25?key=e1ed7a271abe4b569d408758dec7dafb';
      client.get(url, function (data, response) { 
          res.json({...data})
      });
  }),
}
module.exports = sportsDataIO;