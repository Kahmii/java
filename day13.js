let forimg = document.getElementById("forimg");
let forform = document.getElementById("forform");
let confirmPage = document.getElementById("confirm-page");
let time = document.getElementById("time");
let myform = document.getElementById("form");
let fromWhere = document.getElementById("fromwhere");
let toWhere = document.getElementById("towhere");
let detail = document.getElementById("detail");
let cancel = document.getElementById("cancel");
let startbutt = document.getElementById("start");
let count = document.getElementById("stopwatch");

let showStyle = {
    visibility: "visible",
    position: "relative"
};
let hideStyle = {
    visibility: "hidden",
    position: "absolute"
};

myform.addEventListener("submit", (event) => {
    event.preventDefault();

    let correct = true;

    if (!fromWhere.value.trim()) {
        fromWhere.style.background = "red";
        correct = false;
    } else {
        fromWhere.style.background = ""; // Reset background if valid
    }

    if (!toWhere.value.trim()) {
        toWhere.style.background = "red";
        correct = false;
    } else {
        toWhere.style.background = ""; // Reset background if valid
    }

    if (correct) {
        Object.assign(forform.style, hideStyle);
        detail.innerHTML = `You are requesting a ride from ${fromWhere.value} to ${toWhere.value}, please confirm your ride.`;
        Object.assign(confirmPage.style, showStyle);
    }
});

let pay = document.getElementById("pay");
let paydet = document.getElementById("paydet");
let gen = document.getElementById("gen");
let container = document.querySelector(".container");

function rec() {
    container.innerHTML = `
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
    `;
}

gen.addEventListener("click", () => {
    Object.assign(pay.style, hideStyle);
    container.style.visibility = "visible"; // Make container visible
    rec();
});
