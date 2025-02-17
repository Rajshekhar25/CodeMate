const express = require('express')

const app = express() // the server is created not started 

app.get('/', (req,res)=>{
    res.send('Hellow')
})
module.exports=app