const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const models = require('../app/models');
const userFactory = require('../database/factories/user');

chai.use(chaiHttp);

//Test Connection to DB
describe('Connect to DB', () => {
    it('it should connect to DB', (done) => {
        models.sequelize
            .authenticate()
            .then(() => {
                done();
            })
            .catch(err => {
                console.error('Unable to connect to the database:', err);
            });
    });
});

//Test the /POST login
describe('/POST login', () => {

    it('it should test the login route', () => {
        chai.request(server)
            .post('/auth/login')
            .send({"token" : "test@mail.com"})
            .end((err, res) => {
                chai.expect(res).to.have.status(200);
            });
    });
});