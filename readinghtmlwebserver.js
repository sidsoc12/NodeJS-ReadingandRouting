const http = require('http')
const PORT = process.env.PORT || 3000
const fs = require("fs");
const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html")
    // reading html file
    fs.readFile("./index.html", (err, data) => {
        if( err) {
            console.log(error)
            res.end()
        }
        else{
            res.write(data)
            res.end()
        }
    })
})
server.listen(PORT, () => console.log(`Server running... on port ${PORT} `))