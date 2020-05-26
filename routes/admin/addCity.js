const express = require('express');
const cityPage = require('../../views/admin/cities');
const Repo = require('../../repositories/addCity');

const router = express.Router();

router.get('/admin/addcity', (req, res) => {
    res.send(cityPage());
});

router.post('/admin/addcity', async (req, res) => {
    const { city } = req.body;

    await Repo.create({ city });

    res.redirect('/order');
});

module.exports = router;