module.exports = () => {
    return `
     <!DOCTYPE html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Shop</title>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" rel="stylesheet">
        <link href="/css/main.css" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css"></link>
      </head>
     
     <body>
     <div class="container">
     <div class="columns is-centered">
     <div class="column is-one-quarter">
     <form method="POST">
         <input required class="input" name="name" type="text" placeholder="Enter your name"> <br> <br>
         <input required class="input" name="email" type="text" placeholder="Enter your email"><br> <br>
         <input required class="input" name="size" type="text" placeholder="Enter size"><br> <br>
         <input required class="input" name="city" type="text" placeholder="Enter your city"><br> <br>
         <input required class="input" name="time" type="text" placeholder="Enter date and time"><br> <br>
             <button class="button is-primary">Submit</button>
</div>
</div>
</div>
</body>
    `
};