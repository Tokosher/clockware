const express = require('express');
const mainPage = require('../../views/admin/createMaster');
const usersRepo = require('../../repositories/createMaster');


const router = express.Router();

router.get('/admin/newmaster', async (req, res) => {
    res.send(mainPage())
});

router.post('/admin/newmaster',

    async (req, res) => {
    const { city } = req.body;

    await usersRepo.create({ city });

    res.redirect('/masterlist');
});

module.exports = router;