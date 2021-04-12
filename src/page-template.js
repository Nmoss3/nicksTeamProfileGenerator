const generateManager = (addManager) => {
  if (!addManager) {
    return "";
  }

  return `
  <div class="col-lg-4 mb-4">
  <div class="card" id="managerCard">
    <div class="card-body">
      <h5 class="card-title">${addManager.name}</h5>
      <p class="card-text">
        <ul class="list-group">
            <li class="list-group-item">${addManager.role}</li>
            <li class="list-group-item">Office Phone:${addManager.officeNumber}</li>
            <li class="list-group-item">ID:${addManager.id}</li>
            <li class="list-group-item"><a href="mailto:${addManager.email}">Email:${addManager.email}</a></li>
        </ul>
      </p>
    </div>
  </div>
</div>
    `;
};

const generateEngineer = (addEngineer) => {
  if (!addEngineer) {
    return "";
  }

  return `
    <div class="col-lg-4 mb-4">
    <div class="card" id="engineerCard">
      <div class="card-body">
        <h5 class="card-title">${addEngineer.name}</h5>
        <p class="card-text">
          <ul class="list-group">
              <li class="list-group-item">${addEngineer.role}</li>
              <li class="list-group-item"><a>Github:${addEngineer.github}</a></li>
              <li class="list-group-item">ID:${addEngineer.id}</li>
              <li class="list-group-item"><a href="mailto:${addEngineer.email}">Email:${addEngineer.email}</a></li>
          </ul>
        </p>
      </div>
    </div>
  </div>
    `;
};

const generateIntern = (addIntern) => {
  if (!generateIntern) {
    return "";
  }

  return `
    <div class="col-lg-4 mb-4">
    <div class="card" id="internCard">
      <div class="card-body">
        <h5 class="card-title">${addIntern.name}</h5>
        <p class="card-text">
          <ul class="list-group">
              <li class="list-group-item">${addIntern.role}</li>
              <li class="list-group-item">School:${addIntern.school}</li>
              <li class="list-group-item">ID:${addIntern.id}</li>
              <li class="list-group-item"><a href="mailto:${addIntern.email}">Email:${addIntern.email}</a></li>
          </ul>
        </p>
      </div>
    </div>
  </div>
    `;
};

module.exports = (templateData) => {
  const { generateManager, generateIntern, generateEngineer } = templateData;

  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <!-- Required meta tags -->
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,
            initial-scale=1, shrink-to-fit=no"
        />
    
        <link rel="stylesheet" href="style.css">
    
        <!-- Bootstrap CSS -->
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossorigin="anonymous"
        />
    
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.4.1/css/all.css"
          integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz"
          crossorigin="anonymous"
        />
    
        <title>${teamName}</title>
      </head>
    
      <body>
        <main>
         <header class="container text-center">
             <h1 id="teamName">${teamName}</h1>
         </header>
    
         <br>
    
        <div class="container">
          <div class="row">
            ${generateManager}
            ${generateEngineer}
            ${generateIntern}
            </div>
            </div>
        
            <!-- Optional JavaScript -->
            <!-- jQuery first, then Popper.js, then Bootstrap JS -->
            <script
              src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
              integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
              crossorigin="anonymous"
            ></script>
        
            <script
              src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
              integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
              crossorigin="anonymous"
            ></script>
        
            <script
              src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
              integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
              crossorigin="anonymous"
            ></script>
            </main>
            <footer class="container text-center py-3">
                <h2 class="text-dark">&copy;2021 by Nicholas Moss</h2>
            </footer>
        </body>
    </html>
    `;
};
