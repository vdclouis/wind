moment = require('moment');

// km/h to beaufort
exports.beaufort = function (x) {
    return Math.round(Math.sqrt(2) * Math.sqrt(x + 11) - 4);
};

// km/h to knots
exports.knots = function (x) {
    return Math.round(x / 1.852);
};

exports.date = function (x) {
    return moment(x).format('hA');
};

exports.closest = function (forecasts, closestTo) {
    var closest = Math.max.apply(Math, forecasts.map(function (forecast) { return forecast.timestamp }));
    var closestForecastIndex;

    forecasts.forEach(function (forecast, index) {
        if ( forecast.timestamp >= closestTo && forecast.timestamp < closest ) {
            closest = forecast.timestamp;
            closestForecastIndex = index;
        }
    });

    return closestForecastIndex;
};
