// Requiring the index.js file so we can access the data in the team array
const team = require("../index");

// Function to generate the HTML for the manager cards
const getManager = function (manager) {
  return `
  <div class="card-wrapper">
    <div class="card-header manager">
      <p class="name">${manager.name}</p>
      <p class="role">Manager <i class="fa fa-coffee" aria-hidden="true"></i></p>
    </div>
    <div class="card-body">
      <ul>
        <li>ID: ${manager.id}</li>
        <hr>
        <li>
          Email: <a href="mailto:${manager.email}">${manager.email}</a>
        </li>
        <hr>
        <li>Office Number: <h href="tel:${manager.phoneNumber}">${manager.phoneNumber}</a></li>
        <hr>
      </ul>
    </div>
  </div>
  `;
};

// Function to generate the HTML for the engineer cards
const getEngineer = function (engineer) {
  return `
  <div class="card-wrapper">
    <div class="card-header engineer">
      <p class="name">${engineer.name}</p>
      <p class="role">Engineer <i class="fa fa-cogs" aria-hidden="true"></i>
      </p>
    </div>
    <div class="card-body">
      <ul>
        <li>ID: ${engineer.id}</li>
        <hr>
        <li>
          Email: <a href="mailto:${engineer.email}">${engineer.email}</a>
        </li>
        <hr>
        <li>GitHub: <a href="https://github.com/${engineer.github}" target="_blank">https://github.com/${engineer.github}</a></li>
        <hr>
      </ul>
    </div>
  </div>
  `;
};

// Function to generate the HTML for the intern cards
const getIntern = function (intern) {
  return `
  <div class="card-wrapper">
    <div class="card-header intern">
      <p class="name">${intern.name}</p>
      <p class="role">Intern <i class="fa fa-graduation-cap" aria-hidden="true"></i>
      </p>
    </div>
    <div class="card-body">
      <ul>
        <li>ID: ${intern.id}</li>
        <hr>
        <li>
          Email: <a href="mailto:${intern.email}">${intern.email}</a>
        </li>
        <hr>
        <li>School: ${intern.school}</li>
        <hr>
      </ul>
    </div>
  </div>
  `;
};

// Function to take the data collected, loop through it and generate the relevant cards
const generateTeamCards = (data) => {
  teamArray = [];

  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();

    if (role === "Manager") {
      const managerCard = getManager(employee);
      teamArray.push(managerCard);
    }
    if (role === "Engineer") {
      const engineerCard = getEngineer(employee);
      teamArray.push(engineerCard);
    }
    if (role === "Intern") {
      const internCard = getIntern(employee);
      teamArray.push(internCard);
    }
  }

  const teamCards = teamArray.join("");

  const generatePage = generateHTML(teamCards);
  return generatePage;
};

// Function to generate the overall HTML file.
const generateHTML = (teamCards) => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <link rel="stylesheet" href="./style.css" />
      <title>Team Profile</title>
    </head>
    <body>
      <header>
        <nav>
          <p>Team Profile</p>
        </nav>
      </header>
      <div class="container">
        ${teamCards}
      </div>
    </body>
  </html>
  `;
};

module.exports = { generateTeamCards };
