// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".
let array = [1, 2, 3, 4]
function getArray(){
    if(array[0] < array[(array.length - 1)]){
        alert('Hi')
    }elseif(array[0] > array[(array.length - 1)]){
        alert('Bye')
    }elseif(array[0] === array[(array.length - 1)]){
        alert('We close in an hour')
    }
}