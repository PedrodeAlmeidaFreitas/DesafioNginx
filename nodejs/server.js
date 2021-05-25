const express = require("express");
const controller = require("./app/controllers/people.controller.js");

const app = express();

require("./app/routes/people.routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  controller.generate();
  console.log(`Server is running on port ${PORT}.`);
});
