// Requiring needed modules
const inquirer = require("inquirer");
const fs = require("fs");
const utils = require("./src/utils");

const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const Engineer = require("./lib/engineer");

// Empty array to collect team data objects
const team = [];

// Function to prompt the user for the manager information, save the object to the
// team array.
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

// Function to ask the user if they want to add an engineer, intern or exit the app and
// generate their HTML file.
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
        renderPage(team);
      }
    });
};

// Function to prompt the user for the engineer information, save the object to the
// team array.
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

// Function to prompt the user for the intern information, save the object to the
// team array.
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

// Function to take the data from the team array and pass it to the generate team cards
// function in the utils file to generate the HTML file.
const renderPage = () => {
  fs.writeFile("./dist/team.html", utils.generateTeamCards(team), (err) =>
    err
      ? console.log(err)
      : console.log("Successfully created your team profile page!")
  );
};

// Calling the getManager function when the app is started
getManager();

// Exporting the team array so the data can be used in the utils.js file to generate the HTML file.
module.exports = team;
