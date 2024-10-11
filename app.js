const express = require('express');
const cors = require("cors");
const app = express();
const Incomerout = require('./routes/Incomerout')


app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
app.use(express.urlencoded({ extended: true }));
app.use(Incomerout)
app.use((err, req, res, next) => {
    res.send(err.message);
});

app.get("/", (req, res) => {
res.status(200).send("hello from the server !!")
})
module.exports = app; 
