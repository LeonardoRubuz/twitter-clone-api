const express = require('express')
const profileRouter = express.Router()
const profiles = require('../models/profiles.json').usersProfiles


profileRouter.get('/', (req, res) => {
    res.json(profiles)
})


module.exports = profileRouter;