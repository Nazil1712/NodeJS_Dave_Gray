const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.get('^/$|index(.html)?',(req,res)=>{
    res.send(`<h1>Hello There</h1>`)
})

app.get(`/product`,(req,res)=>{
    res.send(`<h1>Product</h1>`)
})

app.get('/about',(req,res)=>{
    // the about page will be redirected to /info page
    res.redirect('/info');
})

app.get('/info',(req,res)=>{
    res.send(`<h1>This is info page</h1>`)
})


//Route handlers (route chaining)
/* app.get('/hello',(req,res,next)=>{
    console.log(`Connected to hello`)
    next()
}, (req,res,next)=>{
    console.log("I am hello2")
    next()
}, (req,res)=>{
    res.send(`<h1>Finally</h1>`)
}) */



//Another way to route chaining
/* const one = (req,res,next)=>{
    console.log("one")
    next()
}

const two = (req,res,next)=>{
    console.log("Two")
    next()
}

const three = (req,res)=>{
    res.send("Three")
}

app.get('/chain',[one,two,three]); */



// 404 page
app.get('/*',(req,res)=>{
    // res.send(`404 not found`)
    res.status(404).send(`404 not found`)
})
app.listen(PORT,()=>console.log(`Listening on the port ${PORT}`))