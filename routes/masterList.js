const express = require('express');
const page = require('../views/masters');
const Repo = require('../repositories/createMaster');
const orderRepo = require('../repositories/newOrder');

const router = express.Router();

router.get('/masterlist', async (req, res) => {
    if(!req.session.userID) res.send('You need to make an order');

    const order = await orderRepo.getOne(req.session.userID);

    const masters = await Repo.getAll();
    res.send(page(masters, order.city));
});

module.exports = router;