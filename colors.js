var chalk   = require('chalk');
var fn      = require('./functions.js');

// set colors based on air temperature
exports.temp = function (x) {
    if (x < 18) {
        return chalk.blue(x + '\xB0C');
    }
    else {
        return chalk.green(x + '\xB0C');
    }
};

// set colors based on wind speed
exports.wind = function (x) {
    var b = fn.beaufort(x);
    var k = fn.knots(x);

    if (b < 3) {
        return chalk.red(b + 'Bft ');
    }
    else if (b > 7) {
        return chalk.red(b + 'Bft ');
    }
    else {
        return chalk.green(b + 'Bft ');
    }
};

// set colors based on wind direction
exports.compass = function (x) {
    var goodWinds = ['SW', 'WSW', 'W', 'WNW', 'NW', 'NNW', 'N', 'NNE', 'NE'];

    if (goodWinds.indexOf(x) > -1) {
        return chalk.green(x);
    }
    else {
        return chalk.red(x);
    }
}
