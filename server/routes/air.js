var express = require('express');
var router = express.Router();
var Client = require('node-rest-client').Client;
var client = new Client();
var args = {
  headers: { 'Ocp-Apim-Subscription-Key': 'e1ed7a271abe4b569d408758dec7dafb' } // request headers
};
/* GET users listing. */
const sportsDataIO = {
  teams: router.get('/teams', function(req, res, next) {
    let queries = req.query;
    let url='https://fly.sportsdata.io/v3/lol/scores/json/Teams';
    var options = {
        host: url,
        method: 'GET'
      };
    
    client.get(url, args, function (data, response) { 
      console.log(url)
      res.json({...data})
    });
  }),
  areas: router.get('/', function(req, res, next) {
      let url='https://fly.sportsdata.io/v3/lol/scores/json/Areas';
      client.get(url, function (data, response) { 
        console.log(url)
        res.json({...data})
      });
  }),
  gamesByDate: router.get('/', function(req, res, next) {
      let url='https://fly.sportsdata.io/v3/lol/scores/json/GamesByDate/2021-03-25';
      client.get(url, function (data, response) { 
        console.log(url)
        res.json({...data})
      });
  }),
}
module.exports = sportsDataIO;