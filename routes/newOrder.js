const express = require('express');
const Repo = require('../repositories/createMaster');

const router = express.Router();

router.get('/master/:id', async (req, res) => {
    const master = await Repo.getOne(req.params.id);

    res.send(`You choose a master ${master.name}`);
});

module.exports = router;