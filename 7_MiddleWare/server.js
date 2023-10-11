const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000


app.use((req,res,next)=>{
    console.log(req.url)
    console.log(req.path)
    next()
})

app.get('/nazil',(req,res)=>{
    res.send("Hey")
})

app.listen(PORT,()=>console.log(`Listening on the port ${PORT}`))