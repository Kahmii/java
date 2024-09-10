let numberToGuess = Math.floor(Math.random()*10)
let player = document.getElementById("guessinput")
let result = document.getElementById("result")



function playGame() {
    let player = document.getElementById("guessinput").value
   
    if (player == numberToGuess) {
        result.textContent = "Congratulations! You guessed the number!";
    }
    else if (player < 10) {
        result.textContent = "A little bit higher almost there!! try again"
    }
    else if (player > 10) {
        result.textContent = "wrong input"
    }
    else{
        result.textContent = "A little bit lower almost there!! try again"
    }
}
// console.log(numberToGuess)


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


// for(i = 0; i<20;i--){
//     console.log(i)
// }


// let taskInput = document.getElementById('taskInput')
// let addTaskButton = document.getElementById('addTaskButton');
// let taskList = document.getElementById('taskList');

// addTaskButton.addEventListener('click', addTask);

// function addTask() {
//     let task = taskInput.value;

//     if(taskText === "") {
//         alert(" cant leave empty ");
//         return;
//     }
//     let li = document.createElement('li');
//     li.textContent = taskText;
//     li.addEventListener('click', function () {
//         li.style.display = 'none';
//     })
//     taskList.appendChild(li);
//     taskInput.value= '';
// }