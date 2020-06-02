const express = require('express');
const mainPage = require('../views/firstPage');
const usersRepo = require('../repositories/newOrder');
//const Repo = require('../repositories/addCity');
const {validationResult} = require('express-validator');
const reservedTimes = require('../repositories/reserverTimeMasters');
const {
    validName,
    validMail
} = require('./admin/validator');

const router = express.Router();

router.get('/order', async (req, res) => {
    res.send(await mainPage({req}));
});

const MILLISECOND_IN_HOUR = 3600000;
router.post('/order',
    [validName, validMail],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.send(mainPage({errors}));
        }

        const {name, email, size, city, date} = req.body;

        // чекнуть не занято ли время
        // если занято, то выдать сообщение, что время занято (в последующем через мейн пейдж)

        // Если не занято, то сделать запись в файле, где хранится всё время мастеров в зависимости от размера часов, пооработать с датой и временем
        const parsedDate = Date.parse(date);
        let hours = 1;

        switch (size) {
            case "Маленькие":
                break;
            case "Средние":
                hours = 2;
                break;
            case "Большие":
                hours = 3;
                break;
        }

        const arrParsed = [parsedDate];

        for (let i = 0; i < hours - 1; i++) {
            arrParsed.push(arrParsed[arrParsed.length-1] + MILLISECOND_IN_HOUR);
        }

        const resultArr = arrParsed.map(date => {
            console.log(date);
            return new Date(date).toLocaleTimeString('nu', {year: "2-digit", month: "2-digit", day: "2-digit"})
        });

        const user = await usersRepo.create({name, email, size, city, date: resultArr});
        req.session.userID = user.id;
        res.redirect('/masterlist')
    });

module.exports = router;