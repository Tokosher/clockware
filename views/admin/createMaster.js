const viewCities = require('../../routes/cityList');

module.exports = async () => {
    return `
        <!DOCTYPE html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Shop</title>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" rel="stylesheet">
        <link href="/css/main.css" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
      </head>
     
     <body>
     <header>
          <nav class="navbar navbar-bottom">
            <div class="container navbar-container">
              <div>
                <a href="/admin/products">
                  <h3 class="title">Admin Panel</h3>
                </a>
              </div>
            </div>
          </nav>
        </header>
        
     <div class="columns is-left">
        <div class="column is-one-quarter">
     <form method="POST">
         <input required class="input" name="name" type="text" placeholder="Enter name"> <br> <br>
         <input required class="input" name="rate" type="text" placeholder="Enter rate"> <br> <br> 
         
         <div class="field">
            <div class="control">
                <div class="select">
                    ${await viewCities()}
                </div>
             </div>
        </div>
             <button class="button is-primary">Submit</button>
        </div>
      </div>
              
      
     </body>
    `
};