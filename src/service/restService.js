var Service = require('./service');
var relDao = require('../dao/relDao');

class RestService extends Service {

    createNode() {
        return relDao.createNode();
    }

    findNode() {
        return relDao.findNode();
    }

}

module.exports = new RestService();
