var logger = require('../logger'),
    utils = require('../utils'),
    MESSAGES = require('../config/message'),
    ERRORS = require('../error');

class BaseApi {

    handleErr(err) {
        logger.error(err);

        if (err instanceof ERRORS.NotFound) {
            return utils.ajaxModel(400, err.message);
        }
        if (err instanceof ERRORS.Exist) {
            return utils.ajaxModel(400, err.message);
        }
        if (err instanceof ERRORS.NotEnough) {
            return utils.ajaxModel(400, err.message);
        }
        if (err instanceof ERRORS.DataError) {
            return utils.ajaxModel(200, err.message);
        }

        return utils.ajaxModel(500, MESSAGES.SERVER_ERROR);
    }
}

module.exports = BaseApi;
