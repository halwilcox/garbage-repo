const express = require('express')
const path = require('path')

const app = express()

console.log(__dirname)

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'../index.html'))
})

const port = process.env.port || 4400

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})

