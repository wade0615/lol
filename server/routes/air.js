var express = require('express');
var router = express.Router();
var Client = require('node-rest-client').Client;
var client = new Client();
/* GET users listing. */
router.get('/', function(req, res, next) {
    let queries=req.query
    console.log('query: ', queries);
    // let url='http://opendata.epa.gov.tw/webapi/api/rest/datastore/355000000I-000259'
    let url='https://fly.sportsdata.io/v3/lol/scores/json/Teams?key=e1ed7a271abe4b569d408758dec7dafb'
    var options = {
        host: url,
        method: 'GET'
      };
    
    client.get(url, function (data, response) { 
        res.json({...data})
    });
});
module.exports = router;