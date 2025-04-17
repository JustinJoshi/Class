// // //Create a stopwatch object that has four properties and three methods
// // let stopwatch = {}
// // stopwatch.currentTimeHrs = 12
// // stopwatch.currentTimeMin = 34
// // stopwatch,currentTimeSec = 34
// // stopwatch.currentTimeMili = 43

// // stopwatch.tellTime = function (time){
// //     console.log(string(stopwatch.currentTimeHrs) + string(stopwatch.currentTimeMin) + string(stopwatch,currentTimeSec))
// // }
// // stopwatch.resetTime = function (time){
// //     console.log(0)
// // }
// // stopwatch.


// const setAlarm = (employed, vacation) => employed && !vacation;bgjm nbm








// function areYouPlayingBanjo(name){
//     name + (name[0].toLowerCase() == 'r' ? 'plays' : 'does not play') + banjo

// }

// function basicOp(operation, value1, value2){
//     if(operation = '+'){
//       return value1 + value2
//     }else if(operation = '-'){
//       return value1 - value2
//     }else if (operation = '*'){
//       return value1 * value2
//     }else if(operation = '%'){
//       return value1 % value2
//     }
//   }



function basicOp(o,a,b){
    switch(o){
        case '+':
            return a+b
        case '-':
            return a-b
        case '*':
            return a*b
        case '/':
            return a/b
    }
}