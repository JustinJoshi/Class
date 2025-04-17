//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let arr = [1,2,3]
function sumArr(arr){
    let sum = arr.forEach((num) => sum += num)
    alert(sum)
}

//Create a function that takes in an array of numbers


//Return a new array of numbers that is every original number squared
function takeInArrNums(arr){
    return arr.map(Math.pow(x,2) )
}
//Create a function that takes string
//Print the reverse of that string to the console
function takeInStr(str){
    return str.split("").reverse().join("");  
}
//Create a function that takes in a string
//Alert if the string is a palindrome or not
function takeInAnotherStr(str){
    if(str.split("").reverse().join("") === str){
        alert(str)
    }
}