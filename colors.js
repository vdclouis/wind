const chalk = require('chalk');
const fn = require('./functions.js');

// set colors based on air temperature
exports.temp = x => {
    let color = '';

    if (x < 18) {
        color = 'blue';
    }
    else {
        color = 'green';
    }

    return chalk[color](`${x}\xB0C`);
};

// set colors based on wind speed
exports.wind = x => {
    const b = fn.beaufort(x);
    // const k = fn.knots(x);
    let color = '';

    if (b < 3) {
        color = 'red';
    }
    else if (b > 7) {
        color = 'red';
    }
    else {
        color = 'green';
    }

    return chalk[color](`${b}Bft`);
};

// set colors based on wind direction
exports.compass = x => {
    const goodWinds = ['SW', 'WSW', 'W', 'WNW', 'NW', 'NNW', 'N', 'NNE', 'NE'];
    let color = '';

    if (goodWinds.indexOf(x) > -1) {
        color = 'green';
    }
    else {
        color = 'red';
    }

    return chalk[color](x);
}
