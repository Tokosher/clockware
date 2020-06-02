const express = require('express');
const mainPage = require('../../views/admin/createMaster');
const usersRepo = require('../../repositories/createMaster');

const router = express.Router();

router.get('/admin/newmaster', async (req, res) => {
    res.send(await mainPage())
});

router.post('/admin/newmaster',

    async (req, res) => {
    console.log(req.body);
    const { name, rate, city } = req.body;

    await usersRepo.create({ name, rate, city });

    res.redirect('/masterlist');
});

module.exports = router;