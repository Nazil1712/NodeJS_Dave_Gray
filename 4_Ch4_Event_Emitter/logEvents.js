const {format} = require('date-fns')
const {v4:uuid} = require('uuid');

const fs = require('fs')
const path = require('path')
const fsPromises = require('fs').promises


const logEvents = async(message)=>{
    const dateTime = `${format(new Date(), 'dd/MM/yyyy\tHH:mm:ss')}`
    const logItem = `${dateTime}\t${uuid()}\t${message}`
    console.log(logItem)
    try{
        if(!fs.existsSync(path.join(__dirname, 'logs'))){
            await fsPromises.mkdir('logs')
        }
        await fsPromises.appendFile(path.join(__dirname, 'logs', 'eventLog.txt'), `${logItem}\n`)
    }catch(err){
        console.log(`Error has been occuered : ${err}`)
    }
}


module.exports = logEvents