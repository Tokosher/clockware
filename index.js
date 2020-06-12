const express = require('express');
const bodyParser = require('body-parser');
const makeOrder = require('./routes/order');
const newMaster = require('./routes/admin/createMaster');
const masterList = require('./routes/masterList');
const newCity = require('./routes/admin/addCity');
const selectedMaster = require('./routes/selectedMaster');
const signOut = require('./routes/signOut');
//const email = require('./routes/sendEmail');

const cookieSession = require('cookie-session');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
    cookieSession({
    keys: ['ldjfnrnwisjdfbgsuvufisjsisyrhnfjh']
}));

// UI
app.use(makeOrder);
app.use(masterList);
app.use(selectedMaster);
app.use(signOut);

//email();

// admin panel
app.use(newMaster);
app.use(newCity);

app.listen(3000, () => {
    console.log("Listening")
});
