const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3300;
const TYPES = {
    ".html": "text/html",
    ".js": "text/javascript",
    ".css": "text/css",
  };

const server = http.createServer((request, response) => {

    if(request.url === "/") {
        request.url = "index.html";
    }
	
    const fullPath = path.join(__dirname, "../game", request.url);
	console.log(fullPath);

    fs.readFile(fullPath, (err, data) => {

        if(err) {
            response.writeHead(500, { "Content-Type": "text/plain" });
            response.end();

            console.error("Server error", err);
        } else {
            const contentType = TYPES[path.extname(fullPath)];

            response.writeHead(200, {
                "Content-Type": contentType
            });
            response.end(data);
        }

    })
});

server.listen(PORT, err => {

    if (err) {
      throw err;
    }

    console.log(`Server started. localhost:${PORT}`);
});