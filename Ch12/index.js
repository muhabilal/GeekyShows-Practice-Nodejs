import http from 'http';
const server = http.createServer((req, res) => {
    //request
    // // console.log(req.url)
    // if (req.url != '/favicon.ico') {
    //     console.log(req.url)
    // }
    // console.log(req.method)

    //reponse
    //Run these three lines
    // res.statusCode = 202;
    // res.statusMessage = 'Success';
    // res.setHeader('Content-Type', 'text/plain');
    //uncomment line 16 and run this code again
    res.writeHead(202, 'Good', { 'Content-Type': 'text/plain' })
    res.end('response from server1')
});

const PORT = process.env.PORT || 8000;
const Host = 'localhost';
server.listen(PORT, Host, () => {
    console.log("server running at http://localhost:8000")
});