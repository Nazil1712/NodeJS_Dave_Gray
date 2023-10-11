const fsPromises = require('fs').promises
const path = require('path')

const fileOps = async()=>{
  try{
    // no need to add callback function because we are using await
    const data = await fsPromises.readFile(path.join(__dirname,'Files','starter.txt'),'utf-8')
    console.log(data)

    await fsPromises.writeFile(path.join(__dirname,'Files','newPromise.txt'),"Hi i am using Promieses")
    await fsPromises.appendFile(path.join(__dirname,'Files','newPromise.txt'),"\nHi iam extra using appended")    
    await fsPromises.rename(path.join(__dirname,'Files','newPromise.txt'),path.join(__dirname,'Files','renamePromise.txt'))   
    
    const newData = await fsPromises.readFile(path.join(__dirname,'Files','renamePromise.txt'),'utf-8')
    console.log(newData)
    // await fsPromises.unlink(path.join(__dirname,'Files','renamePromise.txt'))
  }
  catch(err){
    console.error(err)
  }
}

fileOps()







// .then() fashion
// fsPromises.readFile(path.join(__dirname,'Files','starter.txt'),'utf-8',(err,data)=>{
//   console.log(data)
// }).then((v)=>{
//   console.log(`I am insid .then=> ${v}`)
// })