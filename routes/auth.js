let authController = require('../app/http/controllers/auth.js');

module.exports = function(router) {

    let routePrefix = '/auth';

    router.post( routePrefix + '/login', authController.validate('login'), authController.login);

};