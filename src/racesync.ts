// import { createServer } from "http";
const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const url = require("url");
const properties = require("../config/racesync-config.json");
const server = express();

server.use(bodyParser.json());

server.get("/api/start", (req: any, res: any) => {
  const balls = req.query.balls;
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write("Race Sync Server has been started. " + balls);
  res.end();
});

server.listen(properties.server.port, () => {
  console.log(
    "Server is running on " +
      properties.server.hostname +
      " port " +
      properties.server.port,
  );
});
// create the http server
// const server = http.createServer((req: any, res: any) => {
//   console.log(req);
//   if (req.method == "GET" && req.url == "/api/start") {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.write("Race Sync Server has been started.");
//     res.end();

//   }
// });

// set up the server port and listen for connections
// server.listen(properties.server.port, () => {
//   console.log(
//     "Server is running on " +
//       properties.server.hostname +
//       " port " +
//       properties.server.port,
//   );
// });
