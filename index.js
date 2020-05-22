const express = require('express');
const bodyParser = require('body-parser');
const makeOrder = require('./routes/order');
const newMaster = require('./routes/admin/createMaster');
const masterList = require('./routes/masterList');


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// UI
app.use(makeOrder); // orders from users
app.use(masterList); // list of Masters

// admin panel
app.use(newMaster); // create masters for admins

app.listen(3000, () => {
    console.log("Listening")
});
