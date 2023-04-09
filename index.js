require('dotenv').config({ path: "./.env" });

const express = require("express")
const app = express()
const port = process.env.PORT || 4000
const cors = require("cors")
const path = require('path')
const { dirname } = require('path');
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(express.static(path.join(__dirname, 'public')))
const innitRoute = require('./server/src/route/route')

innitRoute(app)

const db = require('./server/src/config/db')
db.connect()
app.listen(port, () => console.log("Server running on port 4000"))


// const db = require('./config/db')
// db.connect()



