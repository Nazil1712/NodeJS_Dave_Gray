const {format} = require('date-fns')

//here v4 is version v4
// This can be read as import v4 as uuid
const {v4:uuid} = require('uuid')

// const {uuid} = require('uuid')

console.log(format(new Date(),'dd/MM/yyyy\tHH:mm:ss'))

console.log(uuid())