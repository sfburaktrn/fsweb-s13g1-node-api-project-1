const server = require("./api/server");

const port = 9000;

// START YOUR SERVER HERE

server.get("/", (req, res) => {
  res.send("Hello World");
});

server.listen(port, () => {
  console.log("API running on port 9000");
});
