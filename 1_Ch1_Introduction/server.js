console.log("Hello World")
// console.log(global)

// // os module
// const os = require('os')
// // console.log(os)
// console.log(os.type())
// console.log(os.version())
// console.log(os.homedir())
// console.log(`dirname:- ${__dirname}`)
// console.log(`filename:- ${__filename}`)


// path module
// const path = require('path')
// // console.log(`directoryName:- ${path.dirname(__filename)}`)
// // console.log(`filename:- ${path.basename(__filename)}`)
// // console.log(`extension:- ${path.extname(__filename)}`)
// console.log(path.parse(__filename))



// Our own module --> math.js
// const math = require('./math') 
const {add:math} = require('./math')
const {add, sub} = require('./math')
console.log(math(5,2))
// console.log(add(2,3))
// console.log(sub(5,3))
// console.log(div(5,3)) //showing error because we have not imported