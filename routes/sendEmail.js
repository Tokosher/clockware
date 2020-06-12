const nodemailer = require('nodemailer');

module.exports = async () => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'clockware.123@gmail.com',
            pass: ''
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    let mailOptions = {
        from: 'clockware.123@gmail.com',
        to: 'tkach.io123@gmail.com',
        subject: 'TEST',
        text: 'You have ordered a master, congrats!'
    };

    await transporter.sendMail(mailOptions)
        .then(function() {
            console.log('Email sent')
        })
        .catch(() => console.log('Error!'));
};