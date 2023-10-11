const fs = require('fs')

/* 
  beacuse of Async nature both fs.mkdir() and fs.rmdir() executes parallely
  hence if the file is not there this programm just creates file, not delets
  but if there is file available then it will delete it.
  
  solution:- 
    make functions, use Async await
*/ 

if(!fs.existsSync('./new')){
  fs.mkdir('./new',(err)=>{
    if(err) throw err;
    console.log("Directory created!")
  })
}
else{
  console.log("File already exists!")
}


if(fs.existsSync('./new')){
  fs.rmdir('./new',(err)=>{
    if(err) throw err
    console.log("File is deleted")
  })
}
else{
  console.log("File does not exists")
}