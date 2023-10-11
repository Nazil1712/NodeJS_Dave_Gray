const events = require('events');
const EventEmitter = new events.EventEmitter()
const fs = require('fs')
const fsPromises = require('fs').promises
const path = require('path')
const http = require('http')

const PORT = process.env.PORT || 3000

http.createServer((req,res)=>{
    res.end(`<h1>HEllo</h1>`)
}).listen(PORT,()=>console.log(`Listening on the port ${PORT}.......`))