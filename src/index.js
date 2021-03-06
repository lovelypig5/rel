var express = require('express');
var fallback = require('express-history-api-fallback');
var logger = require('./logger');
var filters = require('./filters');
var apis = require('./api');

var app = express();

app.use((req, res, next) => {
    logger.info('%s %s %s', req.method, req.url, req.path);
    next();
});

filters.forEach((filter) => {
    if (filter.route) {
        app.all(filter.route, filter.filter);
    } else {
        app.use(filter.filter);
    }
});
apis.forEach((api) => {
    var method = api.method || 'get';
    app[method](api.route, api.func);
});

app.use(express.static('../assets'));
// history api fallback
app.use(fallback('index.html', {
    root: `../assets`
}));

// app.use(express.static('../assets/dist'));
// app.use(fallback('index.html', {
//     root: `../assets/dist`
// }));

app.listen(3000, function() {
    logger.info(`Backend service listening on port 3000!`);
});
