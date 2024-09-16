// let addbutton = document.getElementById("addButton")
// let taskInput = document.getElementById("taskInput")
// let ul = document.getElementById("ul")

// function display() {
//     let newArr=[]
//     newArr.push(taskInput.value)
//     for (let q =0; q<newArr.length; q++) {
//         ul.innerHTML += `<li>${newArr[q]}</li>` 
//     }
//     taskInput.value = "";
// }

// addbutton.addEventListener("click", display)



// addbutton.addEventListener("click" ,()=> {
//     let task = taskInput.value;
//     let i=0
//     if (task) {
//         for( let i=0;i<1;i++){
//             let li = document.createElement("li");
//             li.textContent = task
//             ul.appendChild(li);
//         }
//         task.value="";
//     }
// })

let store = "0123456789ABCDEF"
let generateColor = document.getElementById("generateColor")
let ul = document.getElementById("ul")

function display() {
    let color = ""

    for(let h = 0; h<6; h++){
        let index = Math.round(Math.random()*16)
        color += store[index]
       
     }
     ul.innerHTML += `<li>${color}</li>`
}
generateColor.addEventListener("click", display)
