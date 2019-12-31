const express = require("express"),
  bodyParser = require("body-parser"),
  cors = require("cors"),
  app = express(),
  routes = require("./constants/routes"),
  port = routes.port;

app.use(bodyParser.json());
app.use(cors({ origin: "*" }));

require("./routes")(app);

let server = app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
);

console.log('environment', process.env.DOCKER_VARIANT)

module.exports = server;
