import { createServer } from "http";

// create the http server
const server = createServer((req, res) => {
  if (req.method == "GET" && req.url == "/api/test") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Hello World!");
    res.end();
  }

});

// set up the server port and listen for connections
server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
