//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

function getData(){
    let cocktailName = document.querySelector('input').value

    console.log(cocktailName)

    fetch("https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_FBMFArW53LgINuADBnUEMsEt1oXrfXIpnk8gDaxc9jTYGfdsHE9bC916Rkz3eOsH")
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data[0])
      document.querySelector('img').src = data[0].url
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}
document.querySelector("button").addEventListener('click', getData)