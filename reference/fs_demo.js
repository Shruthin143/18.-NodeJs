const fs = require('fs')
const path = require('path')

// fs.mkdir(path.join(__dirname, '/test'),{},(err)=>{
//     if(err) throw err;
//     console.log('Folder created');
// })

//Create and write to a file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Writing this through node' ,(err)=>{
//     if(err) throw err;
//     console.log('file created');
// })
// fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), '\n editing this through node' ,(err)=>{
//     if(err) throw err;
//     console.log('file created');
// })

// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8' ,(err,data)=>{
//     if(err) throw err;
//     console.log(data);
// })

//Rename the file
fs.rename(path.join(__dirname, '/test', 'hello.txt'), 
            path.join(__dirname, '/test', 'helloWorld.txt'),
            (err)=>{
    if(err) throw err;
    console.log('renamed file');
})