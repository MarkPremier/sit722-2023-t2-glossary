var express = require("express");
var router = express.Router();

const heading = [
  {
    id: "ID#",
    term: "Term",
    description: "Description",
    references: "References",
  },
];

const termList = [
  { id: 1, term: "John", description: "Test", references: "Test" },
  { id: 2, term: "James", description: "Test", references: "Test" },
  { id: 3, term: "Jessie", description: "Test", references: "Test" },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "SIT722 DevOps Glossary",
    subTitle:
      "Welcome to my glossary website, where I will share a collection of DevOps phrases I have learned over the course of this unit.",
    terms: termList,
    headings: heading,
  });
});

module.exports = router;
