const express = require('express')
const userRouter = express.Router()
const user = require('../models/user.json')


userRouter.get('/', (req, res) => {
    res.json(user)
})


module.exports = userRouter;