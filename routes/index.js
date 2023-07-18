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
      "This refers to the ability to scale up and extend software without having to rewrite major parts of it's code. Designing software in a way that allows and expects significant future expansion is extensible software.",
    references:
      "“Software Extensibility:Definition, Attributes and Techniques,” PeerSpot, Dec. 06, 2021. https://www.peerspot.com/articles/software-extensibility-definition-attributes-and-techniques (accessed Jul. 18, 2023).",
    references2:
      "Manning Publications, “What Makes Code Extensible and Flexible? - Manning,” Manning, Dec. 12, 2019. https://freecontent.manning.com/what-makes-code-extensible-and-flexible/ (accessed Jul. 18, 2023).",
  },
  {
    id: 2,
    term: "DevOps",
    description:
      "This refers to a cultural and technical shift in a company, so that the development and operations teams are no longer seperate, but merged into a single team with a focus on collaboraton and communication.",
    references:
      "“What is DevOps? - DevOps Models Explained - Amazon Web Services (AWS),” Amazon Web Services, Inc., 2023. https://aws.amazon.com/devops/what-is-devops/ (accessed Jul. 18, 2023).",
  },
  {
    id: 3,
    term: "Agile",
    description:
      "This methodology values short development cycles, small teams, close collaboration with clients, constant adaption and continuous improvement.",
    references:
      "Atlassian, “What is Agile? | Atlassian,” Atlassian, 2023. https://www.atlassian.com/agile (accessed Jul. 18, 2023).",
    references2:
      "“What is Agile Software Development?,” Agile Alliance |, Jun. 29, 2015. https://www.agilealliance.org/agile101/ (accessed Jul. 18, 2023).",
  },
  {
    id: 4,
    term: "Microservices",
    description:
      "This refers to breaking apart large monolithic software into smaller, independent yet coupled services. This means that if one Microsservice goes, down the entire app won't go down with it.",
    references:
      "martinekuan, “Microservice architecture style - Azure Architecture Center,” Microsoft.com, 2023. https://learn.microsoft.com/en-us/azure/architecture/guide/architecture-styles/microservices (accessed Jul. 18, 2023).",
  },
  {
    id: 5,
    term: "AIops",
    description: "",
    references: "",
  },
  {
    id: 6,
    term: "Wall of Confusion",
    description: "",
    references: "",
  },
  {
    id: 7,
    term: "Bootstrapping",
    description: "",
    references: "",
  },
  {
    id: 8,
    term: "CI/CD Pipelines",
    description: "",
    references: "",
  },
  {
    id: 9,
    term: "End-to-end Testing",
    description: "",
    references: "",
  },
  {
    id: 10,
    term: "Infrastructure as Code",
    description: "",
    references: "",
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "SIT722 DevOps Glossary",
    subTitle:
      "Welcome to my glossary website, where I will share a collection of DevOps terms I have learned over the course of this unit.",
    terms: termList,
    headings: heading,
  });
});

module.exports = router;
