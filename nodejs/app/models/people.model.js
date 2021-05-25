const sql = require("./db.js");

// constructor
const People = function (people) {
  this.name = people.name;
};

People.getAll = result => {
  sql.query("SELECT * FROM people", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    result(null, getHtml(res));
  });
};

const getHtml = (res) => {
  const people = ganeratePeopleTable(res);
  return `<style>
      table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
      }

      td, th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
      }

      tr:nth-child(even) {
        background-color: #dddddd;
      }
    </style>
    <h1>Full Cycle Rocks!</h1>
    <h2>People Table</h2>
    <table>
      <tr>
        <th>Id</th>
        <th>Nome</th>
        <th>Criado em</th>
      </tr>
      ${people}
    </table>
  `
}

const ganeratePeopleTable = (peopleResult) => {
  if (!peopleResult) return;
  const htmlObject = JSON.parse(JSON.stringify(peopleResult)).map(x => `<tr><td>${x.id}</td><td>${x.name}</td><td>${x.created_at}</td></tr>`)
  return htmlObject.reduce((x, y) => x+y)
}

module.exports = People;