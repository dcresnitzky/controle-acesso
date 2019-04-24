const models = require('../../models');
const validator = require('express-validator/check');

module.exports = {

    validate: (method) => {
        switch (method) {
            case 'login': {
                return [
                    validator.check('token', 'The token is required').exists(),
                ];
            }
            default:
                return [
                ];
        }
    },

    login: (req, res) => {

        const errors = validator.validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        if (req.body.token) {
            res.json(req.body.token);
        }
        res.json(req.body);
    },

    logout: (req, res) => {
        res.json('logout');
    }
};