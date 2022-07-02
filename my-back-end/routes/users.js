var express = require("express");
var router = express.Router();

const users = [
  { id: 1, name: "Ben", email: "ben@example.com" },
  { id: 2, name: "John", email: "john@example.com" },
  { id: 3, name: "Bob", email: "bob@example.com" },
];

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json(users);
});

module.exports = router;
