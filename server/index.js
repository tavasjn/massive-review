require('dotenv').config();
const express = require('express');
const massive = require('massive');

const app = express();
app.use(express.json());


const {SERVER_PORT, CONNECTION_STRING} = process.env

massive(CONNECTION_STRING)
    .then(db => {
        app.set('db', db)
    })
    .catch(err => console.log(err))

app.listen(SERVER_PORT, console.log(`Server is running on ${SERVER_PORT}`))