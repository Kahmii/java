let AddButton = document.getElementById("addbutton")
let ul = document.getElementById("ul")

let  store = "01234567890abcdefghijklmnopqrstuvwsyz!@#$%&*_-"

function display() {
    let password = ""

    for(let h = 0; h<15; h++){
        let lastIndex = store.length - 1
        let index = Math.round(Math.random()* lastIndex)
        password += store[index]
       
     }
     ul.innerHTML += `<li>${password}</li>`
}
AddButton.addEventListener("click", display)



