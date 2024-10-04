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

let stopbutton = document.getElementById("stop")
let startButton = document.getElementById("count")
let count = document.getElementById("countdown")
start = 2
let timeinMillisecconds = start * 60 * 60

function decrease() {
    timeinMillisecconds--

    let hrs = Math.floor(timeinMillisecconds / (60 * 60))
    let min = Math.floor((timeinMillisecconds % (60 * 60)) / 60)
    let sec = Math.floor(timeinMillisecconds % 60)
    console.log(`${hrs}:${min}: ${sec}`);
    count.innerText = `${hrs}:${min}: ${sec}`
}
// decrease()
function call() {
    let decreaseit = setInterval(() => {
        decrease()
        if (timeinMillisecconds == 0) {

            clearInterval(decreaseit)
        }

    }, 1)
    stopbutton.addEventListener('click', () =>{
        clearInterval(decreaseit)
    })
}
startButton.addEventListener('click', call)
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
