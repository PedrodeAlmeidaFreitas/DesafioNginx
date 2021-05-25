const People = require("../models/people.model.js");

// Retrieve all People from the database.
exports.findAll = (req, res) => {
  People.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving People."
      });
    else res.send(data);
  });
};
