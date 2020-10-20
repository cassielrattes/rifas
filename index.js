const express = require('express')
const session = require('express-session');
const cors = require('cors');
const bodyParser = require("body-parser");
const morgan = require('morgan');


const app = express();
app.use(session({
    secret: 'admin123',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}))
app.use(cors());
app.use(bodyParser.json());
app.use(morgan());


app.use("/", require("./src/routes/"));

app.listen(5000, () => {
    console.log("On");
})

