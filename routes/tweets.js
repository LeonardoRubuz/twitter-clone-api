const express = require('express')
const fs = require('fs')
const tweetRouter = express.Router()
const tweets = require('../models/tweets.json')




tweetRouter
.get("/tweets", (req, res) => {
    try{
        const allTweets = JSON.parse(fs.readFileSync('./models/tweets.json'))
        res.json(allTweets)
    }catch(err){
        console.log("Erreur", err);
    }
})
.get("/:username/tweets", (req, res) => {
    const filteredTweets = tweets.filter( tweet => tweet.username === req.params.username)
    res.json(filteredTweets) 
})
.post("/tweets", async (req, res) => {
    fs.readFile('./models/tweets.json', err => {
        if (err) {
            console.log(err);
        }else {
            tweets.push(req.body)
            fs.writeFile("./models/tweets.json", JSON.stringify(tweets, null, 2), err => {
                if (err) {
                    console.log("Erreur", err);
                }else {
                    console.log("Succès");
                    res.json(
                        JSON.parse(fs.readFileSync('./models/tweets.json'))
                    )
                }
            })
        }
    })
    
})

module.exports = tweetRouter