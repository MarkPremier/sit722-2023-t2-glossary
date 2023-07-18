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
  {
    id: 1,
    term: "Extensible Software",
    description:
      "This refers to the ablity to scale up and extend software without having to rewrite major parts of it's code. Designin software in a way that allows and expects significant future expansion is extesible software.",
    references:
      "“Software Extensibility:Definition, Attributes and Techniques,” PeerSpot, Dec. 06, 2021. https://www.peerspot.com/articles/software-extensibility-definition-attributes-and-techniques (accessed Jul. 18, 2023).",
    references2:
      "Manning Publications, “What Makes Code Extensible and Flexible? - Manning,” Manning, Dec. 12, 2019. https://freecontent.manning.com/what-makes-code-extensible-and-flexible/ (accessed Jul. 18, 2023).",
  },
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
