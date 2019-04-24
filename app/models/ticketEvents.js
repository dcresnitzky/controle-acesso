module.exports = function (sequelize, Sequelize) {

    return sequelize.define('user', {

            id: {
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING,
                notEmpty: true
            },
            email: {
                type: Sequelize.STRING,
                validate: {
                    isEmail: true
                }
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false
            },
        },
        {
            tableName: 'ticketEvents',
        });
};
