let startbutton = document.getElementById("startButton")
let stopButton  = document.getElementById("stop")
let count = document.getElementById("stopwatch")
start = 0
let timeinsecconds = start * 60 * 60

function decrease() {
    timeinsecconds ++
    let hrs = Math.floor(timeinsecconds / ( 60 * 60))
    let min = Math.floor((timeinsecconds % (60 * 60)) / 60)
    let sec = Math.floor(timeinsecconds % 60)
    console.log(`${min} min: ${sec} sec`);

    if(sec < 10){
        sec = `0${sec}`
    }
    if (min < 10) {
        min = `0${min}`
    }
    if (min < 10) {
        hrs = `0${hrs}`
    }
    count.innerText = `${hrs} hrs :${min} min: ${sec} sec`
}
decrease()
function call() {
    let decreaseit = setInterval(() => {
        decrease()
        // if (timeinMillisecconds == 0) {

        //     clearInterval(decreaseit)
        // }

    }, 1000)
    stopButton.addEventListener('click', () =>{
        clearInterval(decreaseit)
    })
}
startButton.addEventListener('click', call)
// function call() {

//  let decreaseit = setInterval(()=>{
//     decrease()
   
// }
// , 1000)
// stopButton.addEventListener("click", () => {
//     clearInterval(decrease);  
// }
// }

startbutton.addEventListener('click',call)