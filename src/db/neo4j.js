var neo4j = require('neo4j-driver'),
    config = require('../config/db'),
    logger = require('../logger');

var driver = neo4j.driver("bolt://localhost", neo4j.auth.basic(config.username, config.password), {
    Logging: logger,
    connectionPoolSize: 50
});

module.exports = driver;
