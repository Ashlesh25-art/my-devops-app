const http = require('http');

const server = http.createServer((req, res) => {
    rres.end("Hello DevOps 🚀 Updated");
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});
