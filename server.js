const http = require("http");
const HOSTNAME = process.env.HOSTNAME || "localhost";
const PORT = process.env.PORT || 3000;
var dt = require('./myownmodule');

const server = http.createServer((request,response) => {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/plain");
    response.write(dt.myPort)
    response.end("Hello World");
})

server.listen(PORT, HOSTNAME, () => {
    console.log(`Server is running at http://${HOSTNAME}:${PORT}/`)
})

