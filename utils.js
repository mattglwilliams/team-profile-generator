const team = require("./index");

const getManager = function (manager) {
  return `
  <div class="card-wrapper">
    <div class="card-header">
      <p class="name">${manager.name}</p>
      <p class="role">Manager</p>
    </div>
    <div class="card-body">
      <ul>
        <li>ID: ${manager.id}</li>
        <li>
          Email: <a href="${manager.email}">${manager.email}</a>
        </li>
        <li>Office Number: ${manager.number}</li>
      </ul>
    </div>
  </div>
  `;
};

const getEngineer = function (engineer) {
  return `
  <div class="card-wrapper">
    <div class="card-header">
      <p class="name">${engineer.name}</p>
      <p class="role">Engineer</p>
    </div>
    <div class="card-body">
      <ul>
        <li>ID: ${engineer.id}</li>
        <li>
          Email: <a href="${engineer.email}">${engineer.email}</a>
        </li>
        <li>GitHub: <a href="https://github.com/${engineer.github}">https://github.com/${engineer.github}</a></li>
      </ul>
    </div>
  </div>
  `;
};

const getIntern = function (intern) {
  return `
  <div class="card-wrapper">
    <div class="card-header">
      <p class="name">${intern.name}</p>
      <p class="role">Intern</p>
    </div>
    <div class="card-body">
      <ul>
        <li>ID: ${intern.id}</li>
        <li>
          Email: <a href="${intern.email}">${intern.email}</a>
        </li>
        <li>School: ${intern.school}</li>
      </ul>
    </div>
  </div>
  `;
};

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

const generateHTML = (teamCards) => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
