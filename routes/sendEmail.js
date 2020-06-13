const nodemailer = require('nodemailer');

module.exports = async ({ name, email }) => {

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
        to: `${email}`,
        subject: 'ClockWare Company',
        text: `Dear ${name}, you have successfully ordered a master!`
    };

    await transporter.sendMail(mailOptions)
        .then(function() {
            console.log('Email sent')
        })
        .catch(() => console.log('Error!'));
};