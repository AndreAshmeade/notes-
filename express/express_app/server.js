const express = require("express");
const path = require("path");

const app = express();

// Create an endpoint/route handler
//GET is used to request data from a specified resource.

/*
app.get("/", (req, res) => {
  res.send("<h1>Express is the best<h1>");
});
*/

const members = [
  {
    id: 1,
    name: "John Doe",
    email: "john@gmail.com",
    status: "active",
  },
  {
    id: 2,
    name: "Bob Williams",
    email: "bob@gmail.com",
    status: "inactive",
  },
  {
    id: 3,
    name: "Shannon Jackson",
    email: "shannon@gmail.com",
    status: "active",
  },
];

// Get All Members
app.get("/api/members", (req, res) => {
  res.json(members);
});

// Set static folder
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public"));
});

const PORT = process.env.PORT || 5000;

//The PUT method is most often used to update an existing resource.
//Respond to a PUT request to the /user route:
app.put("/", (res, req) => {
  res.send("Got a PUT request");
});

//POST is used to send data to a server to create/update a resource.
//Respond to POST request on the root route (/), the application’s home page:
app.post("/", (res, req) => {
  res.send("Got a POST request");
});

//Respond to DELETE request on the root route (/), the application's homepage:
// The DELETE method deletes the specified resource.
app.delete("/", (res, req) => {
  res.send("Got a DELETE request");
});

// Listen on a port
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost : ${PORT}`);
});
