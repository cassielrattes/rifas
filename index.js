const express = require('express')
// const session = require('express-session');
const cors = require('cors');
const bodyParser = require("body-parser");
const morgan = require('morgan');


const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(morgan());


app.use("/", require("./src/routes/"));

app.listen(5000, () => {
    console.log("On");
})

