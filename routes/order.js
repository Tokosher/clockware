const express = require('express');
const mainPage = require('../views/firstPage');
const usersRepo = require('../repositories/newOrder');
const Repo = require('../repositories/addCity');
const { check, validationResult } = require('express-validator');
const {
    validName,
    validMail,
    validSize
} = require('./admin/validator');

const router = express.Router();

router.get('/order', async (req, res) => {
    const cities = await Repo.getAll();

    res.send(mainPage({cities}));
});

router.post('/order',
    [validName, validMail, validSize],
    async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.send(mainPage({ errors }));
    }

    const { name, email, size, city, date, time } = req.body;
    const user = await usersRepo.create({ name, email, size, city, date, time });
    res.redirect('/masterlist')
});

module.exports = router;