import http from "http";

// import controller
// import { getTasks, addTask, updateTask, deleteTask } from "./controller";

// create the http server
const server = http.createServer((req, res) => {
   // get tasks
   if (req.method == "GET" && req.url == "/api/test") {
    return 'test';
    //  return getTasks(req, res);
   }

   // Creating a task
   if (req.method == "POST" && req.url == "/api/test2") {
    return 'test2';
    //  return addTask(req, res);
   }

//    // Updating a task
//    if (req.method == "PUT" && req.url == "/api/tasks") {
//      return updateTask(req, res);
//    }

//    // Deleting a task
//    if (req.method == "DELETE" && req.url == "/api/tasks") {
//      return deleteTask(req, res);
//    }
});

// set up the server port and listen for connections
server.listen(3000, () => {
   console.log("Server is running on port 3000");
});