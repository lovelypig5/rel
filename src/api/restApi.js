var BaseApi = require('./baseApi');
var restService = require('../service/restService');

class RestApi extends BaseApi {

    doSomething(req, res) {
        restService.doSomething().then(() => {
            // success
            res.status(200).send('success');
        }, (err) => {
            // Error
            res.status(200).send('err');
        });
    }
}

var restApi = new RestApi();

module.exports = [{
    method: 'post',
    route: '/api/doSomething',
    func: restApi.doSomething
}];
