moment = require('moment');

// km/h to beaufort
exports.beaufort = x => Math.round(Math.sqrt(2) * Math.sqrt(x + 11) - 4);

// km/h to knots
exports.knots = x => Math.round(x / 1.852);

exports.date = x => moment(x).format('hA');

exports.closest = (forecasts, closestTo) => {
    let closest = Math.max(...forecasts.map(forecast => forecast.timestamp ));
    let closestForecastIndex = null;

    forecasts.forEach((forecast, index) => {
        if (forecast.timestamp >= closestTo && forecast.timestamp < closest) {
            closest = forecast.timestamp;
            closestForecastIndex = index;
        }
    });

    return closestForecastIndex;
};
