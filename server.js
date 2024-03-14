const express = require('express');
const app = express()
const cors = require('cors')
const fs = require("fs")
//routers
const tweetRouter = require('./routes/tweets');
const profileRouter = require('./routes/profiles');

app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.send("Twitter mini API")
})


app.use(tweetRouter)
app.use("/profiles",profileRouter)


app.listen(5500, () => {
    console.log("serveur lancé au port 5500");
})