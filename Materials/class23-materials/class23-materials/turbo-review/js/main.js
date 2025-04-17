// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
let sentence = 'Hello this is a sentence.'
if (sentence.includes('?') === true ? alert(sentence) : 0 )
//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
let strMultWords = 'Bee Bumble Rock jr. dev'

let new3 = strMultWords.replace('jr. dev','software engineer')
console.log(new3)

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function returnRPS(){
   let answer = Math.floor(Math.random * 3)
    if (answer === 0){
        return 'rock'
    }else if (answer === 1){
        return 'paper'
    }else{
        return 'scissors'
    }
} 

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function playVsBot(playerChoice){
    playerChoice = returnRPS
    let botChoice = returnRPS
    if (playerChoice === 'rock' && botChoice === 'scissors') ||
    (playerChoice === 'paper' && botChoice === 'rock') ||
    (playerChoice == 'scissors' && botChoice === 'paper'){
        console.log('You Win')
    }else if (playerChoice === botChoice){
        console.log('You Tied')
    }else{
        console.log('You Lose')
    }
}
//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

function takeInArr(arr){
    arr.forEach((x) => playVsBot(x))
}