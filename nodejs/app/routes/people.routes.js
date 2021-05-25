module.exports = app => {
  const people = require("../controllers/people.controller.js");

  // Retrieve all People
  app.get("/", people.findAll);
};
