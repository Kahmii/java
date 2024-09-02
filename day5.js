let time = Number(prompt("What is the time in 24hours"))

if (time < 12){
    alert(`it is ${time}good moring`);
}
else if (time >= 12) {
    alert(`it is ${time} Good afternoon`)
}
else if (time < 24) {
    alert(`invalid hour fam `)
}
else{
    alert(`Wrong Hour`)
}