const express = require('express')
const session = require('express-session');
const cors = require('cors');
const bodyParser = require("body-parser");
const morgan = require('morgan');
const path = require("path")


const app = express();
app.use(session({
    secret: 'admin123',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 24 * 60 * 60 * 365 * 1000 }
}))
app.use(cors({
    origin: ["http://localhost:3000", "http://localhost:5000"],
    credentials: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan());

app.get('/', function(req, res) {
    res.sendFile( path.resolve(__dirname + '/public/index.html') );
});

app.get('/qrcode.js', function(req, res) {
    res.sendFile( path.resolve(__dirname + '/public/qrcode.js') );
});

app.use("/", require("./src/routes/"));

app.listen(5000, () => {
    console.log("On");
})

