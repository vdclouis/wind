var http    = require('http');
var request = require('request');
var key     = require('./apikey.js');
var colors  = require('./colors.js');
var fn      = require('./functions.js');

var spot    = '?spot_id=1114';  //b'berge
var units   = '&units=eu';
var url     = 'http://magicseaweed.com/api/' + key + '/forecast/' + spot + units;

request({ url: url, json: true }, function (error, response, body) {
    if (error) {
      console.log(error);

      return;
    }

    var now = Math.round(new Date().getTime() / 1000);

    body = body[fn.closest(body, now)];

    var force     = body.wind.speed;
    var direction = body.wind.compassDirection;
    var temp      = body.condition.temperature;
    var timestamp = body.localTimestamp;

    var forecast =
        colors.wind(force) + colors.compass(direction) +
        ' | ' + colors.temp(temp) +
        ' @ ' + fn.date(timestamp*1000);

    console.log(forecast);
});
