const http = require('http');
const request = require('request');
const key = require('./apikey.js');
const colors = require('./colors.js');
const fn = require('./functions.js');

const spot = '?spot_id=1114';  //b'berge
const units = '&units=eu';
const url = `http://magicseaweed.com/api/${key}/forecast/${spot}${units}`;

request({ url: url, json: true }, function (error, response, body) {
    if (error) {
      console.log(error);

      return;
    }

    const now = Math.round(new Date().getTime() / 1000);

    body = body[fn.closest(body, now)];

    const force = body.wind.speed;
    const direction = body.wind.compassDirection;
    const temp = body.condition.temperature;
    const timestamp = body.localTimestamp;

    const forecast = `${colors.wind(force)} ${colors.compass(direction)} | ${colors.temp(temp)} @ ${fn.date(timestamp * 1000)}`;

    console.log(forecast);
});
