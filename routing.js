const http = require("http");
const HOSTNAME = process.env.HOSTNAME || "localhost";
const PORT = process.env.PORT || 3000;
var dt = require('./myownmodule');

const server = http.createServer((request,response) => {
    
    console.log(request.url,request.method);
    let path = './';
    //Create your own html pages
    switch(req.url)
    {
        case '/': response.statusCode = 200; path += 'index.html'; break;
        case '/about': response.statusCode = 200; path += 'about.html'; break;
        default : response.statusCode = 404; path += '404.html'; break;
        // Redirect
        // default: res.setHeader("Location", "/"); path += '301.html'; break;

    }
    
    // response.setHeader("Content-Type", "text/plain");
    // response.write(dt.myPort)
    // response.end("Hello World");
})

server.listen(PORT, HOSTNAME, () => {
    console.log(`Server is running at http://${HOSTNAME}:${PORT}/`)
})
