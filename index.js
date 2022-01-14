const inquirer = require("inquirer");
const fs = require("fs");
const utils = require("./utils");

const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const Engineer = require("./lib/engineer");

const team = [];
const teamName = [];

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
      const name = answer.teamName;
      teamName.push(name);
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
        getEngineer();
      } else if (answer.addTeamMember === "Intern") {
        getIntern();
      } else if (answer.addTeamMember === "Exit") {
        console.log("Exited", team);
        console.log(teamName);
        renderPage(team);
      }
    });
};

const getEngineer = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What is the name of the engineer?",
      },
      {
        type: "input",
        name: "engineerID",
        message: "What is the ID number of the engineer?",
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is the email address of the engineer?",
      },
      {
        type: "input",
        name: "engineerGitHub",
        message: "What is the GitHub username of the engineer?",
      },
    ])
    .then((answers) => {
      const engineer = new Engineer();
      engineer.name = answers.engineerName;
      engineer.email = answers.engineerEmail;
      engineer.id = answers.engineerID;
      engineer.github = answers.engineerGitHub;
      team.push(engineer);
      addToTeam();
    });
};

const getIntern = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "internName",
        message: "What is the name of the intern?",
      },
      {
        type: "input",
        name: "internID",
        message: "What is the ID number of the intern?",
      },
      {
        type: "input",
        name: "internEmail",
        message: "What is the email address of the intern?",
      },
      {
        type: "input",
        name: "internSchool",
        message: "What school does the intern attend?",
      },
    ])
    .then((answers) => {
      const intern = new Intern();
      intern.name = answers.internName;
      intern.email = answers.internEmail;
      intern.id = answers.internID;
      intern.school = answers.internSchool;
      team.push(intern);
      addToTeam();
    });
};

const renderPage = () => {
  fs.writeFile("./dist/team.html", utils.generateTeamCards(team), (err) =>
    err
      ? console.log(err)
      : console.log("Successfully created your team profile page!")
  );
};

startApplication();

module.exports = team;
