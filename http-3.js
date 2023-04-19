const http = require ('http');

const server = http.createServer ((req, res)=>{

    if (req.url === '/'){
        res.end (`This is the home page`)
    }
    if (req.url === '/about'){
        res.end (`this is the about page`)
    }
    res.end (`<h1>Error</h1>
    <p>this url is in valide</p>

    <a href ="/"> back to home</a>
    `)
})

server.listen (5000);