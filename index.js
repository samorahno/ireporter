const express = require('express')
const path = require('path');

const app = express()
const port = 3000

// include the path to static files
app.use(express.static(path.join(__dirname, 'UI', 'static')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'UI','index.html'))
})

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname,'UI','signup.html'))
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'UI','login.html'))
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


