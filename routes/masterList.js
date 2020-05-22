const express = require('express');
const page = require('../views/masters');
const Repo = require('../repositories/createMaster');

const router = express.Router();

router.get('/masterlist', async (req, res) => {
    const masters = await Repo.getAll(); // [ {}, {} ...]
    res.send(page(masters));
});

module.exports = router;