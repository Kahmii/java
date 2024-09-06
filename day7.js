let numberToGuess = (Math.random()*10)
let player = document.getElementById("guessinput")
let result = document.getElementById("result")



function playGame() {
    let player = document.getElementById("guessinput").value
   
    if (player == numberToGuess) {
        result.textContent = "Congratulations! You guessed the number!";
    }
    else if (player < numberToGuess) {
        result.textContent = "A little bit higher almost there!! try again"
    }
    else if (player > 10) {
        result.textContent = "wrong input"
    }
    else{
        result.textContent = "A little bit lower almost there!! try again"
    }
}


let cont = document.getElementById("t0List")
let butt = document.getElementById("add")
let put = document.getElementById("getName")

function addListItem() {
   let list = put.value;
   let li = document.createElement("li")
   li.innerText = list;
   cont.appendChild(li);
   put.value = '';
}