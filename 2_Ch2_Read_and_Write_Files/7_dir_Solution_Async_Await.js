const fs = require('fs')
const path = require('path')


const createFile = async () => {

  if (!fs.existsSync('./Files/Nazil')) {
    fs.mkdir(path.join(__dirname, 'Files', 'Nazil'), (err) => {
      if (err) throw err;
      console.log("File created")
    })
  }
  else {
    console.log("File is already created")
  }

}

const deleteFile = async ()=>{
  if (fs.existsSync('./Files/Nazil')) {
    fs.rmdir(path.join(__dirname, 'Files', 'Nazil'), (err) => {
      if (err) throw err;
      console.log("File deleted")
    })
  }
  else {
    console.log("File is already created")
  }
}

const main2= async()=>{
  await createFile()
  await deleteFile()
}

main2()