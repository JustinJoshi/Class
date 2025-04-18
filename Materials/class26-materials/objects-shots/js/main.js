//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

function getData(){
    let cocktailName = document.querySelector('input').value

    console.log(cocktailName)

    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data.drinks.forEach(element => {
        if(element.strDrink === cocktailName){
            console.log(element)
            document.querySelector('img').src = element.strDrinkThumb
            document.querySelector('p').innerText = element.strInstructions
        }
      }))
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}
document.querySelector("button").addEventListener('click', getData)