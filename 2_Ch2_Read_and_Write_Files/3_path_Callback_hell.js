const fs = require('fs')
const path = require('path')

fs.readFile('./Files/starter.txt','utf-8',(err,data)=>{
  if(err) throw err;

  console.log(data)
})


fs.writeFile(path.join(__dirname,'Files','hhh.txt'),"Hi ia musing writefile",(err)=>{
  if(err) throw err;
  console.log("Write Complete")

  fs.appendFile(path.join(__dirname,'Files','hhh.txt'),"callbakcs upon calbacks",(err)=>{
    if(err) throw err;
    console.log("Append complete")

      fs.rename('./Files/hhh.txt','./Files/RenamHHH.txt',(err)=>{
        if(err) throw err;
        console.log("Rename complete")
      })
  })
})
