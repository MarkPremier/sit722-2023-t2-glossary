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
      "The ability to scale up and extend software without having to rewrite major parts of it's code. Designing software in a way that allows and expects significant future expansion.",
    references:
      "“Software Extensibility:Definition, Attributes and Techniques,” PeerSpot, Dec. 06, 2021. https://www.peerspot.com/articles/software-extensibility-definition-attributes-and-techniques (accessed Jul. 18, 2023).",
    references2:
      "Manning Publications, “What Makes Code Extensible and Flexible? - Manning,” Manning, Dec. 12, 2019. https://freecontent.manning.com/what-makes-code-extensible-and-flexible/ (accessed Jul. 18, 2023).",
  },
  {
    id: 2,
    term: "DevOps",
    description:
      "A cultural and technical shift in a company, so that the development and operations teams are no longer seperate, but merged into a single team with a focus on collaboraton and communication.",
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
      "Breaking apart large monolithic software into smaller, independent yet coupled components. This means that if one Microservice goes down, the entire app won't go down with it.",
    references:
      "martinekuan, “Microservice architecture style - Azure Architecture Center,” Microsoft.com, 2023. https://learn.microsoft.com/en-us/azure/architecture/guide/architecture-styles/microservices (accessed Jul. 18, 2023).",
  },
  {
    id: 5,
    term: "Technical Debt",
    description:
      "The necessary cutting of corners and making sacrifices in quality in order to meet deadlines or budget constraints. Eventually the software will become unstable, not work to specifications, and will need to be fixed.",
    references:
      "“Definition of Technical Debt - Gartner Information Technology Glossary,” Gartner, 2023. https://www.gartner.com/en/information-technology/glossary/technical-debt (accessed Jul. 18, 2023).",
    references2:
      "Atlassian, “Escaping the black hole of technical debt | Atlassian,” Atlassian, 2023. https://www.atlassian.com/agile/software-development/technical-debt (accessed Jul. 18, 2023).",
  },
  {
    id: 6,
    term: "Wall of Confusion",
    description:
      "This refers to the act of siloing different groups within a software development process. The isolation of each group causes confusion, promotes conflict and slows the development process.",
    references:
      "S. Kawaguchi, “The Wall of Confusion - Level Up Coding,” Medium, Feb. 28, 2020. https://levelup.gitconnected.com/the-wall-of-confusion-623057a4dd26 (accessed Jul. 18, 2023).",
  },
  {
    id: 7,
    term: "Bootstrapping",
    description:
      "A process that starts automatically and runs without outside input. Relating to a Docker container, this refers to configuration scripts that are run automatically after the container has launched.",
    references:
      "“Bootstrapping container instances with Amazon EC2 user data - Amazon Elastic Container Service,” Amazon.com, 2023. https://docs.aws.amazon.com/AmazonECS/ latest/developerguide/bootstrap_container_instance.html (accessed Jul. 19, 2023).",
  },
  {
    id: 8,
    term: "CI/CD Pipelines",
    description:
      "Stands for Continuous Integration/Continuous Deployment. This automates the process of integrating committed code into production. This includes automated testing and deployment. If there are any issues the developer will be notified and they can make changes which will then go through the automatic process again.",
    references:
      "GitLab, “What is CI/CD?,” Gitlab.com, Jan. 26, 2022. https://about.gitlab.com/topics/ci-cd/ (accessed Jul. 19, 2023).",
    references2:
      "Atlassian, “Continuous integration vs. delivery vs. deployment,” Atlassian, 2023. https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment (accessed Jul. 19, 2023).",
  },
  {
    id: 9,
    term: "End-to-end Testing",
    description:
      "Verifies the entirety of the software is functonal and running efficiently by simulating real world scenarios during testing. As all components are integrated and running together, it can be tested if the program runs fine in a unified state.",
    references:
      "Katalon, “What is End-to-End Testing? E2E Testing Full Guide,” katalon.com, Jun. 10, 2019. https://katalon.com/resources-center/blog/end-to-end-e2e-testing (accessed Jul. 19, 2023).",
  },
  {
    id: 10,
    term: "Infrastructure as Code",
    description:
      "The provisioning of hardware through the use of code. Available via cloud computing providers, these companies take care of the physical hardware, scalability and maintenance, the user just provides the code and provisions the required infrastructure they need.",
    references:
      "mijacobs, “What is infrastructure as code (IaC)? - Azure DevOps,” Microsoft.com, Nov. 28, 2022. https://learn.microsoft.com/en-us/devops/deliver/what-is-infrastructure-as-code (accessed Jul. 19, 2023).",
    references2:
      "“Infrastructure as Code | IBM,” Ibm.com, 2023. https://www.ibm.com/topics/infrastructure-as-code (accessed Jul. 19, 2023).",
  },
  {
    id: 11,
    term: "Monolithic Architecture",
    description:
      "A software architecture that's made up of single, large chunk of code. Though it is less complicated to manage initially, as the code gets larger it becomes difficult to scale and maintain",
    references:
      "Siraj ul Haq, “Introduction to Monolithic Architecture and MicroServices Architecture,” Medium, May 02, 2018. https://medium.com/koderlabs/introduction-to-monolithic-architecture-and-microservices-architecture-b211a5955c63 (accessed Aug. 01, 2023).",
  },
  {
    id: 12,
    term: "Behaviour-Driven Design (BDD)",
    description:
      "A way for the business side and technology side of the company to collaborate. Prioritises small iterations, plenty of feedback and real world scenarios on how the software should work",
    references:
      "“Behaviour-Driven Development - Cucumber Documentation,” Cucumber.io, 2019. https://cucumber.io/docs/bdd/ (accessed Aug. 01, 2023).",
    references2:
      "“BDD: Learn about Behavior Driven Development,” Agile Alliance |, Dec. 17, 2015. https://www.agilealliance.org/glossary/bdd/ (accessed Aug. 01, 2023).",
  },
  {
    id: 13,
    term: "Test-Driven Design",
    description:
      "A software development process that mandates that test cases be created before developing actual code. A test case is created and then code is written that satisfies that test case. No new code is written unless that test case fails. It promoted smaller iterations and functional code.",
    references:
      "Jash Unadkat, “What is Test Driven Development (TDD) ? | BrowserStack,” BrowserStack, Jun. 14, 2023. https://www.browserstack.com/guide/what-is-test-driven-development (accessed Aug. 01, 2023)‌",
    references2:
      "“What is Test Driven Development (TDD)? Example,” Guru99, Jun. 10, 2023. https://www.guru99.com/test-driven-development.html (accessed Aug. 01, 2023).",
  },
  {
    id: 14,
    term: "User Story",
    description:
      "An explanantion of a feature in the software being developed, as expressed by an end user. Used to ensurre the software provides value to the users.",
    references:
      "Atlassian, “User Stories | Examples and Template | Atlassian,” Atlassian, 2023. https://www.atlassian.com/agile/project-management/user-stories (accessed Aug. 01, 2023).",
  },
  {
    id: 15,
    term: "Regression Test",
    description:
      "A type of test that runs everytime code has been committed to the codebase. It checks that the changes haven't introduced unintended issues that break the software or cause regressions like slowdowns. Issues are instantly found out and sent back to developers to rectify.",
    references:
      "Shaumik Daityari, “Regression Testing : Definition, How it works | BrowserStack,” BrowserStack, Jun. 24, 2023. https://www.browserstack.com/guide/regression-testing (accessed Aug. 01, 2023).",
    references2:
      "“Understanding the Role of Regression Testing,” Spiceworks, Oct. 06, 2022. https://www.spiceworks.com/tech/devops/articles/what-is-regression-testing/ (accessed Aug. 01, 2023).",
  },
  {
    id: 16,
    term: "Chaos Testing",
    description:
      "Involves the intentiona creation of error in production code to simulate real life failure states in a test environment. This can allow the refining of disaster response strategies and contingencies.",
    references:
      "E. Goikhman, “Chaos testing: the ultimate guide,” Vulcan Cyber, Oct. 19, 2022. https://vulcan.io/blog/chaos-testing-what-you-need-to-know/ (accessed Aug. 01, 2023).",
  },
  {
    id: 17,
    term: "Containerization",
    description:
      "The act of packaging the software together with its dependancies to ensure it runs the same anywhere. The container contains only what is needed to run the software, so it's lightweight and can have many instances.",
    references:
      "“What Are Containers and Containerization in DevOps? - Papertrail,” Papertrail, Jan. 25, 2022. https://www.papertrail.com/solution/tips/what-are-containers-and-containerization-in-devops/ (accessed Aug. 02, 2023).",
  },
  {
    id: 18,
    term: "Automation",
    description:
      "The usage of tools and services that instantly perform tasks once triggers have been hit. This reduces the manual work for operations teams, and allows instant feedback.",
    references:
      "C. Fernandes, “DevOps automation: Best practices and benefits,” Sumo Logic, Aug. 24, 2022. https://www.sumologic.com/blog/devops-automation-best-practices-benefits/ (accessed Aug. 02, 2023).",
  },
  {
    id: 19,
    term: "Hybrid Cloud",
    description:
      "A mix of on premises computing and computing on the cloud. The two computing environments talk to each other and share different systems. Benefits include increased security for on premises and cheaper capital costs for cloud.",
    references:
      "“What is Hybrid Cloud? Definition and Challenges | VMware,” VMware, Jan. 31, 2023. https://www.vmware.com/au/topics/glossary/content/hybrid-cloud.html (accessed Aug. 02, 2023).",
    references2:
      "“What is hybrid cloud?,” Redhat.com, 2022. https://www.redhat.com/en/topics/cloud-computing/what-is-hybrid-cloud (accessed Aug. 02, 2023).",
  },
  {
    id: 20,
    term: "Mean Time to Recovery",
    description:
      "Relates to the average time it takes to recover from a system failure. From the second the issue begins to the second it is fixed.",
    references:
      "Atlassian, “MTBF, MTTR, MTTF, MTTA: Understanding incident metrics,” Atlassian, 2020. https://www.atlassian.com/incident-management/kpis/common-metrics (accessed Aug. 02, 2023).",
    references2: "",
  },
  {
    id: 21,
    term: "Application Isolation",
    description:
      "A secure computing environment where potentially harmful applications are executed, with the intent to protect computer systems.",
    references:
      "S. Burge, “What is Endpoint Application Isolation & Containment Technology?,” International Security Journal, May 10, 2023. https://internationalsecurityjournal.com/what-is-endpoint-application-isolation-containment-technology/ (accessed Aug. 14, 2023).",
  },
  {
    id: 22,
    term: "Kubernetes",
    description:
      "An open source container management system for use with large scale containerised applications.",
    references:
      "“What is Kubernetes? | Microsoft Azure,” azure.microsoft.com. https://azure.microsoft.com/en-au/resources/cloud-computing-dictionary/what-is-kubernetes/",
  },
  {
    id: 23,
    term: "Virtual Machines",
    description:
      "A virtualised computer that runs in software, which runs on a physical PC. Multiple instances can be run at the same time, each with their own virtualised CPU, RAM, OS, and other components which are provisioned to it from the host computer.",
    references:
      "“What is a Virtual Machine? | VMware Glossary,” VMware, Aug. 04, 2022. https://www.vmware.com/au/topics/glossary/content/virtual-machine.html (accessed Aug. 14, 2023).",
    references2:
      "“What is a virtual machine (VM)?,” Redhat.com, 2022. https://www.redhat.com/en/topics/virtualization/what-is-a-virtual-machine (accessed Aug. 14, 2023).",
  },
  {
    id: 24,
    term: "Alpine Linux",
    description:
      "A lightweight Linux distribution that focuses on security and resource efficiency. Often used in docker containers.",
    references:
      "“about | Alpine Linux,” Alpinelinux.org, 2022. https://www.alpinelinux.org/about/ (accessed Aug. 14, 2023).",
  },
  {
    id: 25,
    term: "Docker",
    description:
      "A platform for building, deploying and managing containers. These the application code with their dependencies including the OS they run on.",
    references:
      "“Docker overview,” Docker Documentation, Aug. 14, 2023. https://docs.docker.com/get-started/overview/ (accessed Aug. 14, 2023).",
    references2:
      "“What is Docker? | IBM,” Ibm.com, 2013. https://www.ibm.com/topics/docker (accessed Aug. 14, 2023).",
  },
  {
    id: 26,
    term: "Cloud Native",
    description:
      "A devops approach which invoves the building, deploying, and managing of applications entirely in the cloud.",
    references:
      "“What is Cloud Native? - Everything you need to know - AWS,” Amazon Web Services, Inc., 2015. https://aws.amazon.com/what-is/cloud-native/ (accessed Aug. 14, 2023).",
  },
  {
    id: 27,
    term: "Terraform",
    description:
      "An infrastructure as code tool that that can be used to provision cloud resources. It is platfoem agnostic, so can be used on multiple different cloud services.",
    references:
      "D. Harrington, “What is Terraform: Everything You Need to Know | Varonis,” Varonis.com, Mar. 30, 2022. https://www.varonis.com/blog/what-is-terraform (accessed Aug. 14, 2023).",
  },
  {
    id: 28,
    term: "Frontend",
    description:
      "The aspect of the website that customers or end users interact with. Is comprised of design elements and user interface elements.",
    references:
      "“What is a Front End (In a Website) - Definition & Development,” Airfocus.com, 2020. https://airfocus.com/glossary/what-is-a-front-end/ (accessed Aug. 14, 2023).",
  },
  {
    id: 29,
    term: "Backend",
    description:
      "The server-side of the website code, focuses on aspects the customer or client cannot see. This includes databases, APIs and architecture.",
    references:
      "“What Does a Back-End Developer Do?,” Coursera, 2023. https://www.coursera.org/articles/back-end-developer (accessed Aug. 14, 2023).",
  },
  {
    id: 30,
    term: "Multi-container Apps",
    description:
      "Applications that run off several fully isolated containers, each container specialising in a specific function.",
    references:
      "“Multi container apps,” Docker Documentation, Aug. 14, 2023. https://docs.docker.com/get-started/07_multi_container/ (accessed Aug. 15, 2023).",
    references2:
      "N. Chase, “Kubernetes multi-container pods and container communication| Mirantis,” Mirantis, 2022. https://www.mirantis.com/blog/multi-container-pods-and-container-communication-in-kubernetes/ (accessed Aug. 15, 2023).",
  },
  {
    id: 31,
    term: "Docker Compose",
    description:
      "A tool that helps maintain, launch and define multi-container applications. Ideal when lots of Microservices are in use.",
    references:
      "“Use Docker Compose,” Docker Documentation, 2023. https://docs.docker.com/get-started/08_using_compose/ (accessed Aug. 30, 2023).",
  },
  {
    id: 32,
    term: "Direct Messaging",
    description:
      "In an application composed of many microservices, this refers to one microservice directly communicating with another in a way that links them together.",
    references:
      "K. Galbraith, “3 methods for microservice communication - LogRocket Blog,” LogRocket Blog, Aug. 27, 2019. https://blog.logrocket.com/methods-for-microservice-communication/ (accessed Aug. 30, 2023).",
  },
  {
    id: 33,
    term: "Indirect Messaging",
    description:
      "In terms of microservices, this refers to decoupling the messaging service, so the two microservices can recieve messages from each other but not have to respond or recieve them instantly.",
    references:
      "jamesmontemagno, “Communication in a microservice architecture,” Microsoft.com, Apr. 13, 2022. https://learn.microsoft.com/en-us/dotnet/architecture/microservices/architect-microservice-container-applications/communication-in-microservice-architecture (accessed Aug. 30, 2023).",
  },
  {
    id: 34,
    term: "Domain Name System",
    description:
      "Often abbreviated as DNS, this refers to a naming systems that allocates an IP address to a hostname. The hostname is text and easier for humans to read and remember.",
    references:
      "“What is DNS? | How DNS works,” Cloudflare, 2023. https://www.cloudflare.com/en-gb/learning/dns/what-is-dns/ (accessed Aug. 30, 2023)",
  },
  {
    id: 35,
    term: "HTTP",
    description:
      "Stands for hypertext transfer protocol. Is a protocol in the application later of the TCP/IP suite that enables the transfer of data across the internet.",
    references:
      "“An overview of HTTP - HTTP | MDN,” Mozilla.org, May 15, 2023. https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview (accessed Aug. 30, 2023)",
  },
  {
    id: 36,
    term: "HTML",
    description:
      "Stands for Hypertext Markup Language. Is a markup laungauge used for structuring and creating web pages.",
    references:
      "“Introduction to HTML,” W3schools.com, 2023. https://www.w3schools.com/html/html_intro.asp (accessed Aug. 30, 2023).",
  },
  {
    id: 37,
    term: "Production Build",
    description:
      "A build of a software development project that is intended for release to the public.",
    references:
      "“LinkedIn,” Linkedin.com, 2023. https://www.linkedin.com/pulse/webpack-production-build-vs-development-prasenjit-sutradhar/ (accessed Aug. 30, 2023).",
  },
  {
    id: 38,
    term: "Live Reload",
    description:
      "When an application automatically displays changes after the code has been saved. No need to manually reload the app.",
    references:
      "A. Davis, “A complete guide to full-stack live reload - LogRocket Blog,” LogRocket Blog, Mar. 07, 2022. https://blog.logrocket.com/complete-guide-full-stack-live-reload/ (accessed Aug. 30, 2023).",
  },
  {
    id: 39,
    term: "NPM",
    description:
      "Stands for Node Package Manager. Is a software registry that allows users to download code packages over a CLI.",
    references:
      "“What is npm,” W3schools.com, 2023. https://www.w3schools.com/whatis/whatis_npm.asp (accessed Aug. 31, 2023)",
  },
  {
    id: 40,
    term: "MongoDB",
    description:
      "An open source database managment service that that allows high volume storage.",
    references:
      "“What Is MongoDB?,” MongoDB, 2018. https://www.mongodb.com/what-is-mongodb (accessed Aug. 31, 2023).",
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "SIT722 DevOps Glossary",
    subTitle:
      "Welcome to my glossary website, where I will share and define a collection of DevOps terms that I have learned over the course of this unit.",
    terms: termList,
    headings: heading,
  });
});

module.exports = router;
