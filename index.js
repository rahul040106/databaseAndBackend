
require('dotenv').config()
const express = require('express');
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {     //listening at home route
    res.send('Hello World!')
})

app.get('/twitter', (req, res)=>{
    res.send("Rahul Patle")
})

app.get('/login', (req,res)=>{
    res.send('<h1>please login at chai and code</h1>')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})