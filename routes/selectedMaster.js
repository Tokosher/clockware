const express = require('express');
const Repo = require('../repositories/createMaster');
const ReservedTimeRepo = require('../repositories/reserverTimeMasters');
const ordersRepo = require('../repositories/newOrder');
const nodemailer = require('nodemailer');

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

    const output = `
    <p>Congrats! You have ordered a master!</p>
    `;

    /////////////////
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: "https://mail.google.com/",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: 'clockware.123@gmail.com', // generated ethereal user
                pass: 'Clock.123', // generated ethereal password
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: '"ClockWare" <clockware.123@gmail.com>', // sender address
            to: "tkach.io123@gmail.com", // list of receivers
            subject: "Test", // Subject line
            text: "Hello world?", // plain text body
            html: output
        });

        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    res.send(`You choose a master ${master.name}`);
});

module.exports = router;