// //set interval and set timeout
// function greet() {
//     console.log("Good Day Voodoo")
// }

// // setInterval(greet, 3000)

// setTimeout(greet, 3000)
// let count = document.getElementById("countdown")
// start = 10

// function decrease() {
//     start --
//     console.log(start);
//     count.innerText = start
// }
// decrease()

//  let decreaseit = setInterval(()=>{
//     decrease()
//     if (start == 0) {

//         clearInterval(decreaseit)
//     }
// }
// , 1000)
let count = document.getElementById("countdown")
start = 5
let timeinMillisecconds = start * 60 

function decrease() {
    timeinMillisecconds --
    let min = Math.floor(timeinMillisecconds/60 )
    let sec =  Math.floor(timeinMillisecconds % 60)
    console.log(`${min} minutes: ${sec} seconds`);
    count.innerText = `${min} minutes: ${sec} seconds`
}
decrease()

 let decreaseit = setInterval(()=>{
    decrease()
    if (timeinMillisecconds == 0) {

        clearInterval(decreaseit)
    }
}
, 1000)
// let getCorrectDate = new Date()
// console.log(getCorrectDate.getFullYear());
// console.log(getCorrectDate.getMonth());
// console.log(getCorrectDate.getDate());
// console.log(getCorrectDate.getDay());
// console.log(getCorrectDate.getMinutes());
// console.log(getCorrectDate.getSeconds());
// console.log(getCorrectDate.getMilliseconds());


// function birthday() {
//     let today = new Date().getTime()
// console.log(today);
// let thatday = new Date("september 30").getTime()
// console.log(thatday)
// let diff = today - thatday
// console.log(diff)
// }
// birthday()



