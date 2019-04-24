const faker = require('faker');
const models = require('../../app/models');
/**
 * Generate an object which container attributes needed
 * to successfully create a user instance.
 *
 * @param  {Object} props Properties to use for the user.
 *
 * @return {Object}       An object to build the user from.
 */
function createUser(props = {}) {
    const defaultProps = {
        email: faker.internet.email(),
        name: faker.name.firstName(),
    };
    let user = Object.assign({}, defaultProps, props);

    return models.user.create(user);
}
/**
 * Generates a user instance from the properties provided.
 *
 * @param  {Object} props Properties to use for the user.
 *
 * @return {Object}       A user instance
 */
module.exports = (props = {}) => {
    return models.createUser(props);
};
