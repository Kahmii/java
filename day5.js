// let time = Number(prompt("What is the time in 24hours"))

// if (time < 12){
//     alert(`it is ${time}good moring`);
// }
// else if (time >= 12) {
//     alert(`it is ${time} Good afternoon`)
// }
// else if (time < 24) {
//     alert(`invalid hour fam `)
// }
// else{
//     alert(`Wrong Hour`)

// }

let getCorrectDate = new Date ()

console.log(getCorrectDate.getFullYear());
console.log(getCorrectDate.getMonth()+1);
console.log(getCorrectDate.getDate());
console.log(getCorrectDate.getDay()+1);
console.log(getCorrectDate.getMinutes());
console.log(getCorrectDate.getSeconds());
console.log(getCorrectDate.getMilliseconds());


let greeting = document.getElementById("greet")
let yourname = prompt("what is your name")

if(getCorrectDate.getHours() <= 12){
   greeting.innerText = `Good afternoon ${yourname.toUpperCase()}`
}
else if (getCorrectDate.getHours()<=12) {
   greeting.innerText = `Good morning ${yourname.toUpperCase()}`
}
else if(getCorrectDate.getHours()>=16){
   greeting.innerText = `Good evening ${yourname.toUpperCase()}`
}
else{
   greeting.innerText= `Good day ${yourname.toUpperCase()}`
}