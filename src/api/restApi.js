var BaseApi = require('./baseApi');
var restService = require('../service/restService');

class RestApi extends BaseApi {

    findNode(req, res) {
        restService.findNode().then(() => {
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
    method: 'get',
    route: '/api/findNode',
    func: restApi.findNode
}];
