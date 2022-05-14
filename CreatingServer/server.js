const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

//ser header content type
res.setHeader('Content-Type', 'text/html');

res.write('<p>Hello, Allan</p>');
res.write('<p>Hello, Allan again!</p>');
res.end();    
});

server.listen(3000, 'localhost', () => {
    console.log('listening on port 3000');
})