const express    = require('express');
const bodyParser = require('body-parser');
const session    = require('express-session');
const cors       = require('cors');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({ secret: process.env.SESSION_SECRET, cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));

app.use(require('./routes'));

const port = process.env.PORT || 3000;
const address = process.env.SERVER_ADDRESS || '127.0.0.1';

app.listen(port, address, () => console.log(`Server running on http://${address}:${port}`));

module.exports = app;