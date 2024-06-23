import { FlagChangeService } from "./services/flag-change.service";
import { FlagState } from "./types/flag-state";
const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const https = require("https");
const url = require("url");
const properties = require("../config/racesync-config.json");
const server = express();
let currentFlagStatus: FlagState = FlagState.CLEAR;
const flagChangeService: FlagChangeService = new FlagChangeService();

const options = {
  host: "api.openf1.org",
  port: 443,
  path: "/v1/race_control?session_key=latest&category=Flag",
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

// const fcService = new FlagChangeService();
// server.use(bodyParser.json());
let rcMsgArray: any[] = [];

function getJSON(options: any, onResult: any): void {
  const port = options.port == 443 ? https : http;

  let output = "";

  const req = port.request(options, (res: any) => {
    console.log(`${options.host} : ${res.statusCode}`);
    res.setEncoding("utf8");

    res.on("data", (chunk: any) => {
      output += chunk;
    });

    res.on("end", () => {
      if (res.statusCode === 200) {
        let obj = JSON.parse(output);

        onResult(res.statusCode, obj);
      } else {
        console.log("Skipping update due to server error.");
      }
    });
  });

  req.on("error", (err: any) => {
    // res.send('error: ' + err.message);
  });

  req.end();
}

function getLatestMessages(oldIndex: number, newIndex: number): any[] {
  //console.log("oldIndex " + oldIndex);
  console.log("newIndex " + newIndex);
  if (oldIndex < 0) {
    console.log("oldIndex < 0");
    return rcMsgArray;
  } else if (newIndex > oldIndex) {
    return rcMsgArray.slice(oldIndex, newIndex + 1);
  }
  return [];
}

function updateFlagStatus(msgArray: any[]) {}

let reqNum = 1;
let intervalId = setInterval(() => {
  getJSON(options, (statusCode: any, result: any[]) => {
    const oldIndex = rcMsgArray.length - 1;
    rcMsgArray = result;
    const newIndex = rcMsgArray.length - 1;
    let updates = getLatestMessages(oldIndex, newIndex);
    reqNum++;
    if (updates.length < 1) {
      console.log("No updates found this time. req#" + reqNum);
    } else {
      console.log(rcMsgArray);
    }
  });
}, 10000);

// result.forEach((element) => {
//   console.log(element.message);
// });
// });

// server.get("/api/start", (req: any, res: any) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.write("Race Sync Server has been started.");
//   res.end();
//   console.log(req.query);
//   while (true) {
//     getJSON(options, (statusCode: any, result: any) => {
//       console.log(statusCode);
//       console.log(result);
//     });
//     setTimeout(() => {}, 3000);
//   }
// });

// server.listen(properties.server.port, () => {
//   console.log(
//     "Server is running on " +
//       properties.server.hostname +
//       " port " +
//       properties.server.port,
//   );
// });
