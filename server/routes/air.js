var express = require('express');
var router = express.Router();
var Client = require('node-rest-client').Client;
var client = new Client();
var args = {
  headers: { 'Ocp-Apim-Subscription-Key': 'e1ed7a271abe4b569d408758dec7dafb' } // request headers
};
/* GET users listing. */
// const sportsDataIO = {
//   teams: router.get('/', function(req, res, next) {
//     console.log('teams')
//     let queries = req.query;
//     let url='https://fly.sportsdata.io/v3/lol/scores/json/Teams';
//     var options = {
//         host: url,
//         method: 'GET'
//       };
    
//     client.get(url, args, function (data, response) { 
//       console.log(url)
//       res.json({...data})
//     });
//   }),
//   areas: router.get('/', function(req, res, next) {
//       console.log('areas')
//       let url='https://fly.sportsdata.io/v3/lol/scores/json/Areas';
//       client.get(url, function (data, response) { 
//         console.log(url)
//         res.json({...data})
//       });
//   }),
//   gamesByDate: router.get('/', function(req, res, next) {
//       console.log('gamesByDate')
//       let url='https://fly.sportsdata.io/v3/lol/scores/json/GamesByDate/2021-03-25';
//       client.get(url, function (data, response) { 
//         console.log(url)
//         res.json({...data})
//       });
//   }),
// }
// module.exports = sportsDataIO;
router.get('/', function(req, res, next) {
  console.log(req.url, req.baseUrl)
  if(req.baseUrl.includes('competitions')) {
    console.log('competitions')
    let url='https://fly.sportsdata.io/v3/lol/scores/json/Competitions';
    client.get(url, args, function (data, response) { 
      res.json({...data})
    });
  };
  if(req.baseUrl.includes('seasonTeams')) {
    console.log('SeasonTeams')
    let url='https://fly.sportsdata.io/v3/lol/scores/json/SeasonTeams/100000235';
    client.get(url, args, function (data, response) { 
      res.json({...data})
    });
  };
  if(req.baseUrl.includes('standings')) {
    console.log('standings')
    let url='https://fly.sportsdata.io/v3/lol/scores/json/Standings/100001186';
    client.get(url, args, function (data, response) { 
      res.json({...data})
    });
  };
  // if(req.baseUrl.includes('gamesByDate')) {
  //   console.log('gamesByDate')
  //   let url='https://fly.sportsdata.io/v3/lol/scores/json/GamesByDate/2021-03-25';
  //   client.get(url, args, function (data, response) { 
  //     res.json({...data})
  //   });
  // }
})

module.exports = router;
