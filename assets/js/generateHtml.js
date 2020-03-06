
function generateHTML(data) {
  return `<!DOCTYPE html>
  <html lang="en">
     <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
        <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <title>Git Hub Profile Gen</title>
        <style>
        .card {
          background-color: ${data.color};
        }

        .card-body{
          color: seashell;
          font-size: large;
          font-family: fantasy;
        }
        a{
          font-size: 40px;
        }
        </style>
        <body>
         
<div class="jumbotron">
  <div class="display-4">
 <div class="container">
     <div class="row">
     <div class="card width: 45rem;">
     <img src="${data.image}" class="card-img-top">
     <div class="card-body">
            <h1>Name: ${data.name}</h1>
            <h2>Username: ${data.username}</h2>
            <h3>Bio: ${data.bio}</h3>
            <h3>Location: ${data.location} <i class="fas fa-compass"></i></h3>
            <br>
            <p>Following: ${data.following}</p>
            <p>Followers: ${data.followers}</p>
            <p>Public Repos: ${data.publicRepo}</p>
            <p>Stared Repos: ${data.stars}</p>
            <br>
            <a href="${data.blog}" target ="_blank" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true" ${data.noblog}>Blog <i class="fas fa-blog"></i></a>
            <a href="${data.url}" target ="_blank" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">GitHub <i class="fab fa-github"></i>
            </a>
            
      </div>
      </div>
     </div>
 </div>
 </div>
 </div>   

    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>   
</body>
</html>`}

module.exports = generateHTML;