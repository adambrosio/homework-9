const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const API = require("./utils/API");
const markdown = require("./utils/markdown");

const questions = [
    {
      type: "input",
      name: "github",
      message: "What is your GitHub username?"
    },
    {
      type: "input",
      name: "title",
      message: "What is the name of your project?"
    },
    {
      type: "input",
      name: "description",
      message: "Please provide a description of your project"
    },
    {
      type: "list",
      name: "license",
      message: "What kind of license should your project have?",
      choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    },
    {
      type: "input",
      name: "installation",
      message: "What command should be run to install dependencies?",
      default: "npm i"
    },
    {
      type: "input",
      name: "test",
      message: "What command should be run to run tests?",
      default: "npm test"
    }
  ];

  const writeToFile = (file, data) => {
      return fs.writeFileSync(path.join(process.cwd(), file), data);
  }

  const init = () => {
    inquirer.prompt(questions)
    .then((repsonses) => {
        console.log("Searching for profile..");

    API.getUser(responses.github)
    .then(({ data }) => {
        writeToFile("README.md", markdown({ ...responses, ...data}))
    })
      })
  }

  init();