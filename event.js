let getBody = document.querySelector("body")

let ChangeColor = document.getElementById("changeColor")
let ChangeColorAgain = document.getElementById("changeColorAgain")
let StopChanging = document.getElementById("stopChanging")

const fChange = ()=>{
    getBody.style.background = "red"
    getBody.style.color = "white"
}
ChangeColor.addEventListener("click", fChange)



function stop() {
    getBody.style.background = "white"
    getBody.style.color = "black"

    ChangeColor.removeEventListener("click", fChange)
}
StopChanging.addEventListener("click",stop)








getBody.id = "gettout"

console.log(getBody.id)

ChangeColor.addEventListener("click", ()=>{
    getBody.classList.toggle("blue")
})
