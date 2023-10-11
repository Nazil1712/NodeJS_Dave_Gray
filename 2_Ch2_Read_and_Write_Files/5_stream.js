const fs = require('fs')

const rs = fs.createReadStream('./files/lorem.txt','utf-8');
const ws = fs.createWriteStream('./files/new-lorem.txt','utf-8')


/* 
rs.on('data',(data)=>{
  // console.log(data)
  ws.write(data)
}) */

// more efficient approach
rs.pipe(ws)