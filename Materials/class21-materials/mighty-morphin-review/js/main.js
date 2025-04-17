// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let age = 0
age = 'CHRISTMAS'
console.log(age)
//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let age2 = 'hello'
age2 = age2.substr(age2.length - 2)
alert(age2)
// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function takeInNums(num1, num2, num3, num4, num5){
    alert(Math.abs(100 - (num1 + num2 + num3 + num4 + num5)))
}
takeInNums(1, 2, 3, 4, 5)
// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function takeIn3Nums(a,b,c){
    console.log(Math.min(a, b, c), Math,max(a,b,c))

}
takeIn3Nums(1,2,3)

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
function headsOrTails(){
    if(Math.floor(Math.random() * 2) == 0){
        return(true)
    }else{
        return(false)
    }
}
headsOrTails()

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
function takeInANum(a){
    for(let i = 1; a > i; i++){
        console.log(headsOrTails ? console.log('heads') : console.log('tails'))
    }
    
}
takeInANum(4)