// Create web server .. http module
import http from 'http';
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.end('response from server')
});


//define port 8000
server.listen(8000, 'localhost', () => {
    console.log("server running at http://localhost:8000")
}); //go to browser localhost/8000


//Another example/way
// const server = http.createServer((req, res) => {
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('response from server1')
// });

// const PORT = process.env.PORT || 8000;
// const Host = 'localhost';
// server.listen(PORT, Host, () => {
//     console.log("server running at http://localhost:8000")
// });