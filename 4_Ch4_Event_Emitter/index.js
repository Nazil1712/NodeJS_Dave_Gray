const logEvents = require('./logEvents')
const events = require('events');
const EventEmitter = new events.EventEmitter()

EventEmitter.on('log',(msg)=> logEvents(msg))


setTimeout(()=>{
    EventEmitter.emit('log',`Log events Emitted`)
}, 2000)


