const fs  = require('fs')
const path = require('path')

// Because of Async nature we are not getting o/p as we want

// // 1) Reading File
// fs.readFile(path.join(__dirname,'files','starter.txt'),'utf8',(err,data)=>{
//   if(err) throw err;
//   console.log(data)
// })


// //2) Writing File
// fs.writeFile(path.join(__dirname, 'files','path_created.txt'),"Hi i am created using path.join()",(err)=>{
//   if(err) throw err;
//   console.log("Write complete")

// })


// //3) Appending file
// fs.appendFile(path.join(__dirname,'files','path_created.txt'),"\nHi i am using appendFile()",(err)=>{
//   if(err) throw err;
//   console.log("append complete")
// })


// 4) fs.open()
// fs.open(path.join(__dirname,'Files','open.txt'),'w',(err,data)=>{
//   if(err) throw err
//   console.log("File created!")
// })


// first Create myFol folder to try out below code!!!
// fs.appendFile(path.join(__dirname,'myFol','path_created.txt'),"\nHi i am using appendFile()",(err)=>{
//   if(err) throw err;
//   console.log("append complete")
// })