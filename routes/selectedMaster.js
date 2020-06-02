const express = require('express');
const Repo = require('../repositories/createMaster');
const ReservedTimeRepo = require('../repositories/reserverTimeMasters');
const ordersRepo = require('../repositories/newOrder');

const router = express.Router();

router.get('/master/:id', async (req, res) => {
    const master = await Repo.getOne(req.params.id);
    const masterTime = await ReservedTimeRepo.getOne(req.params.id);
    const userOrder = await ordersRepo.getOne(req.session.userID);

    const userOrderTime = userOrder.date;
    const masterTimeReserved = masterTime.reservedTime;

    let found = false;

    for (let record of masterTimeReserved) {
        for(let time of userOrderTime) {
            if (record === time) {
                found = true;
            }

            if(found) {
               return res.send("Selected time reserved, choose another master or time")
            }
        }
    }

    await ReservedTimeRepo.pushTime(req.params.id, userOrderTime);

    res.send(`You choose a master ${master.name}`);
});

module.exports = router;