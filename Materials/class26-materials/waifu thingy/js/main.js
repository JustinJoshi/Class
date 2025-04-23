//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

function getData(){
    let imageType = document.querySelector('input').value
    
    console.log(imageType)

    fetch('https://nekos.best/api/v2/dance')
    .then(response => response.json())
    .then(json => document.querySelector('img').src = (json.results[0].url))
  
  // https://nekos.best/api/v2/neko/xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.png
  
    }
document.querySelector("button").addEventListener('click', getData)