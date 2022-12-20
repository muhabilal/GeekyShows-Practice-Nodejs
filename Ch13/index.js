// Create web server .. http module
import http from 'http';
const server = http.createServer((req, res) => {
    // res.writeHead(200, "OK", { "Content- type": "text/html" });
    // res.end('<h1>Home page</h1>');
    if (req.url == '/') {
        res.end('<h1>Home page</>');
    }
    if (res.url == '/about') {
        res.end('<h1>About page</>');
    }
    else {
        res.end('<h1>404 Page not found</h1>');
    }
});

const PORT = process.env.PORT || 8000;
const Host = 'localhost';
server.listen(PORT, Host, () => {
    console.log("server running at http://localhost:8000")
});