// // *Variables*
// // Declare a variable, assign it a value, and alert the value
// let age = 2
// alert(age)
// // Create a variable, divide it by 10, and console log the value
// let age2 = 10
// age2 /= 10
// console.log(age2)
// // *Functions*
// // Create a function that multiplys 3 numbers and alerts the product
// function multi(a, b, c){
//     alert(a*b*c)
// }
// // Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
// function four(a, b, c, d){
//     console.log((a+b) -c -d)
// }
// // *Conditionals*
// // Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"
// function three(a, b, c){
//     if((((100+a)-b)/c) > 25){
//         console.log("WE HAVE A WINNA")
//     }
// }
// // Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"
// function day(a, b){
//     b = a.toLowerCase()
//     if(b === 'sunday' || b === 'saturday'){
//         alert('weekend')
//     }else if(b === 'monday' || b === 'tuesday' || b === 'wednesday' || b === 'thursday' || b === 'friday'){
//         alert('week day')
//     }else{
//         alert('Try Again!')
//     }
// }
//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
function numbr(a){
    for(let i = 1; i <= a; i++){
        i++
        i++
        console.log(i)
    }
}