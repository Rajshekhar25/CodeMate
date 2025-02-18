const express = require('express')
const aiRoutes = require('./routes/ai.routes')

const app = express() // the server is created not started 

app.use(express.json())   //to parse the req.body

app.get('/', (req,res)=>{
    res.send('Hellow')
})

app.use('/ai',aiRoutes)
module.exports = app