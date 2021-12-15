const http = require('http');

// const server = http.createServer((req, res)=>{
//     res.write('Welcome to our home page, little one')
//     res.end()
// })

const server = http.createServer((req, res)=>{
    if (req.url === '/') {
        res.end('Welcome to our home page, little one')
    }
    if (req.url === '/about') {
        res.end('Here is our short history')
    }
    res.end(`
    <h1> Oops! </h1>
<p> We can't seem to find the page you are looking for</p>
<a href="/">back home</a>
    `)
})

server.listen(5000)
