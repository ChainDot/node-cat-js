const fs = require('fs')
const file1 = process.argv[2]
const file2 = process.argv[3]

const cat = (file1,file2) => {
  if(fs.existsSync(file1)){ // check if the file exist
    if(process.argv.length === 3){
      return   fs.readFileSync(file1, 'utf-8')
    } else if (process.argv.length === 4) {
      return fs.readFileSync(file1,'utf-8')
    } 
  } else {
    return `error: ${file1} doesn't exist`
  }
}
console.log(cat(file1, file2)) 

//command line exit cases
if(process.argv.length < 3 || process.argv.length > 4){
  console.log('usage: node cat.js filename (optional filename)')
}


// 1.node cat.js file1 /show content of file1
// 2.node cat.js file1 file2  /show content of both files
// 3.node cat.js -n filename  /show content of file preceding with line numbers
// 4.node cat.js >newfile /Will create and a file named newfile








