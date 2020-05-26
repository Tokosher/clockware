const { check } = require('express-validator');

module.exports = {
    // valid size
    validSize: check('size')
        .trim()
        .toFloat()
        .isFloat({min: 1})
        .withMessage('Must be a number greater that 1'),
    // valid name
    validName: check('name')
        .trim()
        .isLength({ min: 3 })
        .withMessage("Must be a valid name"),
    // valid mail
    validMail: check('email')
        .trim()
        .normalizeEmail()
        .isEmail()
        .withMessage('Must provide a valid email'),
    // valid master name for admins
    validMaster: check('master')
        .trim()
        .isLength({ min: 3 })
        .withMessage("Must be a valid number"),
};