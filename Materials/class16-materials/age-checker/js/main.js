//Create a conditonal that checks their age
let age
console.log(age)
//If under 16, tell them they can not drive
if(age < 16){
    console.log('you cannot drive')
}
//If under 18, tell them they can't hate from outside the club, because they can't even get in
if(age < 18){
    console.log('you cannot drive')
}
//If under 21, tell them they can not drink
if(age < 21){
    console.log('they can not drink')
}
//If under 25, tell them they can not rent cars affordably
if(age < 25){
    console.log('they can not rent cars affordably')
}
//If under 30, tell them they can not rent fancy cars affordably
if(age < 30){
    console.log('they can not rent fancy cars affordably')
}
//If over 30, tell them there is nothing left to look forward too
if(age > 30){
    console.log('there is nothing left to look forward too which is a lie -100devs')
}
//--- Harder
//On click of the h1
document.querySelector('h1').addEventListener('click', run)
function run(){
    if(age < 30)
        console.log('fortnite')
}
//Take the value from the input
document.querySelector('#danceDanceRevolution').value
//Place the result of the conditional in the paragraph
document.querySelector('h1').addEventListener('click', run)
function run(){
    if(age < 30)
document.querySelector('p').innerText = (age)
}