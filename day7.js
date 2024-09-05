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
    else{
        result.textContent = "A little bit lower almost there!! try again"
    }
}