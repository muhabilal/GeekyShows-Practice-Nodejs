import http from 'http';
const server = http.createServer((req, res) => {
    console.log(req.url)
    res.setHeader('Content-Type', 'text/plain');
    res.end('response from server1')
});

const PORT = process.env.PORT || 8000;
const Host = 'localhost';
server.listen(PORT, Host, () => {
    console.log("server running at http://localhost:8000")
});