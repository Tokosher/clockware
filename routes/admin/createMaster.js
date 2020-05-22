// make new master and add new here only for admins
const express = require('express');
const mainPage = require('../../views/admin/createMaster');
const usersRepo = require('../../repositories/createMaster');

const router = express.Router();

router.get('/admin/newmaster', async (req, res) => {
    res.send(mainPage())
});

router.post('/admin/newmaster', async (req, res) => {
    const { name, rate } = req.body;

    await usersRepo.create({ name, rate });

    res.redirect('/masterlist');
});

module.exports = router;