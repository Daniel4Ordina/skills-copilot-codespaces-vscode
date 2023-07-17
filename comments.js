// Create a web server
// 1. Use express to create a web server
// 2. Create a route for GET request to the root URL
// 3. Send back a response with some HTML
// 4. Test your work!

const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.get('', (req, res) => {
    res.send('<h1>Welcome to my website!</h1>');
});

app.get('/about', (req, res) => {
    res.send('<h1>About</h1>');
})

app.get('/weather', (req, res) => {
    res.send('<h1>Weather</h1>');
})

app.listen(port, () => {
    console.log('Server is up on port ${port}.');
});