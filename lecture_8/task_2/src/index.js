const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3300;
const TYPES = {
    ".html": "text/html",
    ".js": "text/javascript",
    ".css": "text/css",
  };

const server = http.createServer((require, result) => {

    if(require.url === "/") {
        require.url = "index.html";
    }

    const fullPath = path.join("./game", require.url);

    fs.readFile(fullPath, (err, data) => {

        if(err) {
            result.writeHead(500, { "Content-Type": "text/plain" });
            result.end();

            console.error("Server error", err);
        } else {
            const contentType = TYPES[path.extname(fullPath)];

            result.writeHead(200, {
                "Content-Type": contentType
            });
            result.end(data);
        }

    })
});

server.listen(PORT, err => {

    if (err) {
      throw err;
    }

    console.log(`Server started. localhost:${PORT}`);
});