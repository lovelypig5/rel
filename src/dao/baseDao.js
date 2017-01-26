var model = require('../model');
var neo4j = require('../db/neo4j'),
    logger = require('../logger'),
    utils = require('../utils'),
    MESSAGES = require('../config/message'),
    ERRORS = require('../error');

class BaseDao {

    constructor() {
        this.logger = logger;
        this.driver = neo4j;
        this.MESSAGES = MESSAGES;
        this.ERRORS = ERRORS;
        this.model = model;
        this.ajaxModel = utils.ajaxModel;
    }

}

module.exports = BaseDao;
