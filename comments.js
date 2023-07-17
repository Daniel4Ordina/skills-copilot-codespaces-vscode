// Create web server with Express.js
// 1. Create a new Express App
const express = require('express')
const app = express()
// 2. Serve static files from public folder
app.use(express.static('public'))
// 3. Parse the body of the request
const bodyParser = require('body-parser')
app.use(bodyParser.json())
// 4. Create a new MongoDB client and connect to MongoDB
const MongoClient = require('mongodb').MongoClient
let db
MongoClient.connect('mongodb://localhost:27017/express-comments', (err, database) => {
    if (err) return console.log(err)
    db = database
    // 5. Start the web server listening on port 3000
    app.listen(3000, () => {
        console.log('listening on 3000')
    })
})
// 6. Define a route to list all comments
app.get('/comments', (req, res) => {
    db.collection('comments').find().toArray((err, result) => {
        if (err) return console.log(err)
        res.send(result)
    })
})
// 7. Define a route to create a new comment
app.post('/comments', (req, res) => {
    db.collection('comments').save(req.body, (err, result) => {
        if (err) return console.log(err)
        console.log('saved to database')
        res.redirect('/')
    })
})