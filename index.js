const express = require('express');
const bodyParser = require('body-parser');
const makeOrder = require('./routes/order');
const newMaster = require('./routes/admin/createMaster');
const masterList = require('./routes/masterList');
const newCity = require('./routes/admin/addCity');
const newOrder = require('./routes/newOrder');

const cookieSession = require('cookie-session');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
    cookieSession({
    keys: ['ldjfnrnwisjdfbgsuvufisjsisyrhnfjh'] // encryption key
}));

// UI
app.use(makeOrder); // orders from users
app.use(masterList); // list of Masters
app.use(newOrder);

// admin panel
app.use(newMaster); // create masters for admins
app.use(newCity); // add new city

app.listen(3000, () => {
    console.log("Listening")
});
