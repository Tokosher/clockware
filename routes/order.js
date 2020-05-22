const express = require('express');
const mainPage = require('../views/firstPage');
const usersRepo = require('../repositories/newOrder');

const router = express.Router();

router.get('/order', (req, res) => {
    res.send(mainPage());
});

router.post('/order', async (req, res) => {
    const { name, email, size, city, time } = req.body;
    const user = await usersRepo.create({ name, email, size, city, time });
    res.redirect('/masterlist')
});

module.exports = router;