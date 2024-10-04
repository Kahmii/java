let forimg = document.getElementById("forimg")
let forform = document.getElementById("forform")
let confirmPage = document.getElementById("confirm-page")
let time = document.getElementById("time")
let myform = document.getElementById("form")
let fromWhere = document.getElementById("fromwhere")
let toWhere = document.getElementById("towhere")
let detail = document.getElementById("detail")
let cancel = document.getElementById("cancel")
let startbutt = document.getElementById("start")
let timedet = document.getElementById("timedet")
let pau = document.getElementById("pau")
let sto = document.getElementById("sto")

let showStyle = {
    visibility: "visible",
    position: "relative"
}
let hideStyle = {
    visibility: "hidden",
    position: "absolute"
}
setTimeout(() => {
    Object.assign(forimg.style, hideStyle)
    Object.assign(forform.style, showStyle)
}, 3000);
let textPattern = /^[a-zA-Z0-9\s]+$/;
myform.addEventListener("submit", (event) => {
    event.preventDefault()

    let correct = true

    if (!textPattern.test(fromWhere.value)) {
        fromWhere.style.background = "red"
        correct = false
    }

    if (!textPattern.test(toWhere.value)) {
        toWhere.style.background = "red"
        correct = false
    }

    if (correct) {

        Object.assign(forform.style, hideStyle)
        detail.innerHTML = `You are requesting a ride from ${fromWhere.value} to ${toWhere.value}, please confirm your ride.`;
        Object.assign(confirmPage.style, showStyle)
    }
})


// cancel.addEventListener("click", () => {
//     Object.assign(confirmPage.style, hideStyle)
//     Object.assign(forform.style, showStyle)
// })

let startbutton = document.getElementById("startButton")
let stopButton = document.getElementById("stop")
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
    count.innerText = `Ride in progress......${min}: ${sec} You are now moving from Bodija to Challenge`
}
startbutt.addEventListener("click", () => {
    Object.assign(confirmPage.style, hideStyle)
    Object.assign(time.style, showStyle)
    call();
})

function call() {
    decrease = setInterval(decrease, 1000); 
}
stopButton.addEventListener("click", () => {
    clearInterval(decrease);  
});
let pay = document.getElementById("pay")
let paydet = document.getElementById("paydet")
let gen = document.getElementById("gen")

function end() {
    paydet.innerHTML = `Your trip has come to an end...`
}


startbutton.addEventListener("click",()=>{
    Object.assign(time.style, hideStyle)
    Object.assign(pay.style, showStyle)
    end()
});

let conta =  document.querySelector(".container")

function rec() {
    conta.innerHTML = `
            <div class="header">
                <h2>Ride has Ended</h2>
                <div class="icon">✔️</div>
            </div>
            <div class="content">
                <div class="fare-details">
                    <p><span>Base Fare</span><span>#2000</span></p>
                    <p><span>Time Fare</span><span>#100</span></p>
                    <hr>
                    <p><span>Initial Total</span><span>#2100</span></p>
                    <p><span>Tax (10%)</span><span>#21</span></p>
                    <hr>
                    <p><strong>Total Amount</strong><strong>#2121</strong></p>
                </div>
                <div class="button-container">
                    <button>Make payment</button>
                </div>
            </div>
        </div>`
}

gen.addEventListener("click", ()=>{
    Object.assign(pay.style, hideStyle)
    Object.assign(conta.style, showStyle)
    rec();
})



