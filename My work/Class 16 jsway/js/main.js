// let day = prompt('What day is it today?').toLowerCase()
// if (day = 'sunday'){
//     console.log('monday')
// }else if (day = 'monday'){
//     console.log('tuesday')
// }else if (day = 'tuesday'){
//     console.log('wednesday')
// }else if (day = 'wednesday'){
//     console.log('thursday')
// }else if (day = 'thursday'){
//     console.log('friday')
// }else if (day = 'friday'){
//     console.log('saturday')
// }else if (day = 'saturday'){
//     console.log('sunday')
// }

// nb1 5

// let nb1 = Number(prompt("Enter nb1:"));
// let nb2 = Number(prompt("Enter nb2:"));
// let nb3 = Number(prompt("Enter nb3:"));

// if (nb1 > nb2) {
//   nb1 = nb3 * 2;
// } else {
//   nb1++;
//   if (nb2 > nb3) {
//     nb1 += nb3 * 3;
//   } else {
//     nb1 = 0;
//     nb3 = nb3 * 2 + nb2;
//   }
// }
// console.log(nb1, nb2, nb3);
// let month = prompt('What month is it')
// const days31 = [1,3,5,7,8, 10, 12]
// const days30 = [4,5,9,11]

// if(days31.includes(month)){
//     alert(31)
// }else if(days30.includes(month)){
//     alert(30)
// }else if(month == 2){
//     alert(28)
// }else{
//     alert('invalid input')
// }

// if(!(Number(h))){
//     alert('error')
//     h = prompt('What time is it? By the hour')
// }



let h = Number(prompt('What time is it? By the hour'))
while(!(h.valueOf())){
    alert('error')
    h = Number(prompt('What time is it? By the hour'))
}
let m = Number(prompt('What time is it? By the mins'))
while(!(m.valueOf())){
    alert('error')
    m = Number(prompt('What time is it? By the hour'))
}
let s = Number(prompt('What time is it? To the sec'))
while(!(h.valueOf())){
    alert('error')
    s = Number(prompt('What time is it? By the hour'))
}

s += Number(1)

if (s == 60){
   s = 0
   m += 1
} else if (s > 60){
    s -= 60
    m += 1
}

if (m == 60){
    m = 0
    h += 1
} else if (m > 60){
    m -= 60
    h += 1
}

if (h == 24){
    h = 0
} else if (h > 24){
    h -= 24
}


console.log(h, m, s)
