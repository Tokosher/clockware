const express = require('express');
const mainPage = require('../../views/admin/createMaster');
const mastersRepo = require('../../repositories/createMaster');
const reservedTimesRepo = require('../../repositories/reserverTimeMasters');

const router = express.Router();

router.get('/admin/newmaster', async (req, res) => {
    res.send(await mainPage())
});

router.post('/admin/newmaster',
    async (req, res) => {
    console.log(req.body);
    const { name, rate, city } = req.body;

    await mastersRepo.create({ name, rate, city });
    const master = await mastersRepo.getOneBy({ name, rate, city });
    await reservedTimesRepo.create({ name, id: master.id, reservedTime: [] });

    res.send('You create a new master!');
});

module.exports = router;