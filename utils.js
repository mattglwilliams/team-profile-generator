const team = require("./index");

const generateHTML = (teamName, name, id, email, phoneNumber) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./style.css" />
    <title>Document</title>
  </head>
  <body>
    <header>
      <nav>
        <p>${teamName}</p>
      </nav>
    </header>
    <div class="container">
      <div class="card-wrapper">
        <div class="card-header">
          <p class="name">${name}</p>
          <p class="role">Manager</p>
        </div>
        <div class="card-body">
          <ul>
            <li>ID: ${id}</li>
            <li>
              Email:
              <a href="${email}">${email}</a>
            </li>
            <li>Office Number: ${phoneNumber}</li>
          </ul>
        </div>
      </div>
    </div>
  </body>
</html>`;
};

module.exports = { generateHTML };
