const viewCities = require('../routes/cityList');

/*const viewCities = (list) => {
    const result = list.map(city =>
         `
         <option>${city.city}</option>
        `
    ).join('');

    return `
    <select name="city">
        ${result}
    </select>
    `;

};*/

const getError = (errors, prop) => {
    try {
        return errors.mapped()[prop].msg
    } catch {
        return ''
    }
};

const idUser = (id) => {
    if (id) return `Your id: ${id}`;
        return ''
};

module.exports = async ({req, errors }) => {
    return `
     <!DOCTYPE html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Shop</title>
        <link rel="stylesheet" href="/plugins/jquery.datetimepicker.min.css" >
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
        <link rel="stylesheet" href="/css/style.css">
        <script src="/plugins/jquery.js"></script>
        <script src="/plugins/jquery.datetimepicker.full.js"></script>
      </head>
     
     <body>
     <div class="container">
     <div class="columns is-centered">
     <div class="column is-one-quarter">
     <p>${idUser(req.session.userID)}</p>
     <form method="POST">
         <input required class="input" name="name" type="text" placeholder="Enter your name"> <br> <br>
         <p class="help is-danger">${getError(errors, 'name')}</p>
         <input required class="input" name="email" type="text" placeholder="Enter your email"><br> <br>
         <p class="help is-danger">${getError(errors, 'email')}</p>
         <!--<input required class="input" name="size" type="text" placeholder="Enter size"><br> <br>-->
         <div class="field">
            <div class="control">
                <div class="select">
                    <select name="size">
                        <option disabled selected>Выберете размер часов</option>
                        <option>Маленькие</option>
                        <option>Средние</option>
                        <option>Большие</option>
                    </select>
                </div>
             </div>
        </div>
         <p class="help is-danger">${getError(errors, 'size')}</p>
         
         <div class="field">
            <div class="control">
                <div class="select">
                    ${await viewCities()}
                </div>
             </div>
        </div>
        
         <div class="field">
          <div class="control">
              <input autocomplete="off" id="datetime" name="date" placeholder="Выберите дату и время"> <br>
          </div>
        </div>
             <button class="button is-primary">Submit</button>
</div>
</div>
</div>

<script >
$("#datetime").datetimepicker();
</script>

</body>
    `
};