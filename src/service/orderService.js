var Service = require('./service');
var userDao = require('../dao/userDao');

class RestService extends Service {

    doSomething() {
        return this.db.transaction((transaction) => {
            return userDao.doSomething();
        });
    }

}

module.exports = new RestService();
