// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
// let favDrink = 'Water'
// console.log(favDrink)
// //Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
// let str = 'apple, Peanut, Banana'
// str.includes('apple') === true ? console.log('ye') : console.log('na')
// // *Functions*
// // Create a function that returns rock, paper, or scissors as randomly as possible
// function rockPaperScissor(){
//  let num = (Math.floor(Math.random() * 3))
//    if (num === 0){
//     console.log('rock')
//    }else if(num === 1){
//     console.log('paper')
//    }else{
//     console.log('scissors')
//    }


// // *Conditionals*
// //Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
// function checkIfWonRPS(){
// let you = rockPaperScissor()
// let bot = rockPaperScissor()
// if (you === 'rock' && bot === 'scissors' || you === 'scissors' && bot === 'paper' || you === 'paper' && bot === 'rock')
//     console.log('win!')
// }
// //*Loops*
// //Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
// function createArrayOfChoices(){
//     let 
// }

function positiveSum(arr) {
    let sum
    arr.forEach((element, index) => element < 0 ? arr.splice(index, 1): sum = sum + element)
  }

 