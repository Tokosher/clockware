const express = require('express');

const router = express.Router();

router.get('/signout', (req, res) => {
    req.session = null;
    console.log(req.session);
    res.send('Now you are a new user')
});

module.exports = router;