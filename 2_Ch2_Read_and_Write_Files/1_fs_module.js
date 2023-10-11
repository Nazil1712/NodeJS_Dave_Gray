const fs = require('fs')

// // 1) Async Function --  Reading File
// // fs.readFile('./Files/starter.txt',(err,data)=>{
// //   if(err) throw err;
// //   else{
// //     // console.log(data)
// //     console.log(data.toString())
// //   }
// // })

// //OR

// fs.readFile('./Files/hello.txt','utf-8',(err,data)=>{
//   if(err) throw err;
//   else{
//     console.log(data)
//   }
// })

// // to check that fs.readFile is async function
// console.log("Hello...")

// // Error Handling
// // process.on('uncaughtException',(err)=>{
// //   console.log(`There was an uncaught error: ${err}`)
// //   process.exit(1)
// // })




//2) Writing File
fs.writeFile('./Files/AutoCreated.txt',"HI I am created using writeFile",(err)=>{
  if(err) throw err;
})