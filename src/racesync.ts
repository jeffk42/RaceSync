// import { createServer } from "http";
const http = require("http");
const properties = require("../config/racesync-config.json");

// create the http server
const server = http.createServer((req: any, res: any) => {
  console.log(req);
  if (req.method == "GET" && req.url == "/api/start") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Race Sync Server has been started.");
    res.end();
  }
});

// set up the server port and listen for connections
server.listen(properties.server.port, () => {
  console.log(
    "Server is running on " +
      properties.server.hostname +
      " port " +
      properties.server.port,
  );
});
