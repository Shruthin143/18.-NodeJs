// const importing = require('./person')

// console.log(importing);
// console.log(importing.name);
// console.log(importing.age);

// const imp_Person = require('./person')
// const person1 = new imp_Person('shruthin', 25)

// person1.greeting()

//Logger

// const Logger = require('./logger');
// const logger = new Logger();

// logger.on('message', data => console.log('called listener:', data))
// logger.log('hello world')

//Putting all together
const http = require('http')
const path = require('path')
const fs = require('fs')


//Server

const server = http.createServer((req, res) => {
    // if(req.url === '/'){

    //     fs.readFile(path.join(__dirname, 'public', 'index.html' ), (err, content) => {
            
    //         if (err) throw err;
    //          res.writeHead(200, {'Content-Type': 'text/html'})
    //          res.end(content)
    //     })
        
    // }
    // if(req.url === '/about'){

    //     fs.readFile(path.join(__dirname, 'public', 'about.html' ), (err, content) => {
            
    //         if (err) throw err;
    //          res.writeHead(200, {'Content-Type': 'text/html'})
    //          res.end(content)
    //     })
        
    // }

    // if(req.url === '/api/users'){
    //     const users = [
    //         {name: 'shr', age:20},
    //         {name: 'John', age:30},

    //     ]
    //     res.writeHead(200,{'Content-Type': 'text/html'})
    //     res.end(JSON.stringify(users))
    // }
  
    //=======making pages dynamic
    let filepath = path.join(
        __dirname, 'public', 
        req.url === '/' ? 'index.html' : req.url
    )
    //Extension of file
    let extname = path.extname(filepath)

    //Initial content type
    let contentType = 'text/html'

    //Check ext and content type
    switch(extname) {
        case '.js':
            contentType = 'text/javascript'
            break;
        case '.css':
            contentType = 'text/css'
            break;
        case '.json':
            contentType = 'application/json'
            break;
        case '.png':
            contentType = 'image/png'
            break;
        case '.jpg':
            contentType = 'image/jpg'
            break;
}
    fs.readFile(filepath, (err, content) => {
        if(err){
            if(err.code == 'ENOENT'){
                //page not found
                fs.readFile(path.join(__dirname, 'public', '404error.html'), (err, content) => {
                    res.writeHead(200, {'Content-type':'text.html'})
                    res.end(content, 'utf-8')
                })
            }else{
                res.writeHead(500)
                res.end(`Server Error: ${err.code}`)
            }
        }else{
            //success
            res.writeHead(200, {'Content-type': contentType})
            res.end(content, 'utf-8')
            
        }
        
    })
})

const PORT = process.env.PORT || 5000
server.listen(PORT, ()=> console.log(`server running on port ${PORT}`))