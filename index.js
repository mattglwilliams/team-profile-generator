const inquirer = require("inquirer");
const fs = require("fs");
const utils = require("./utils");

const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const Engineer = require("./lib/engineer");

const team = [];

const startApplication = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "teamName",
        message:
          "Welcome to the team profile generator. Please enter the name of your team:",
      },
    ])
    .then((answer) => {
      const teamName = answer.teamName;
      getManager();
    });
};

const getManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is the name of the team manager?",
      },
      {
        type: "input",
        name: "managerID",
        message: "What is the ID number of the team manager?",
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is the email address of the team manager?",
      },
      {
        type: "input",
        name: "managerNumber",
        message: "What is the phone number of the team manager?",
      },
    ])
    .then((answers) => {
      const manager = new Manager();
      manager.name = answers.managerName;
      manager.email = answers.managerEmail;
      manager.id = answers.managerID;
      manager.phoneNumber = answers.managerNumber;
      team.push(manager);
      addToTeam();
    });
};

const addToTeam = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "addTeamMember",
        message: "Would you like to add team member?",
        choices: ["Engineer", "Intern", "Exit"],
      },
    ])
    .then((answer) => {
      if (answer.addTeamMember === "Engineer") {
        console.log("Engineer", team);
        // getEngineer();
      } else if (answer.addTeamMember === "Intern") {
        console.log("Intern", team);
        // getIntern();
      } else if (answer.addTeamMember === "Exit") {
        console.log("Exited", team);
        // renderPage(team);
      }
    });
};

const renderPage = () => {
  fs.writeFile("index.html", utils.generateHTML(team), (err) =>
    err
      ? console.log(err)
      : console.log("Successfully created your team profile page!")
  );
};

startApplication();
