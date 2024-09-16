// let getBody = document.querySelector("body")

// let ChangeColor = document.getElementById("changeColor")
// let ChangeColorAgain = document.getElementById("changeColorAgain")
// let StopChanging = document.getElementById("stopChanging")

// const fChange = ()=>{
//     getBody.style.background = "red"
//     getBody.style.color = "white"
// }
// ChangeColor.addEventListener("click", fChange)



// function stop() {
//     getBody.style.background = "white"
//     getBody.style.color = "black"

//     ChangeColor.removeEventListener("click", fChange)
// }
// StopChanging.addEventListener("click",stop)








// getBody.id = "gettout"

// console.log(getBody.id)

// ChangeColor.addEventListener("click", ()=>{
//     getBody.classList.toggle("blue")
// })



//loops types for loop, while loop,do-while loop
//
// let index = 0
// index += 2

// for (let index = 0; index < 21; index+=2) {
//    console.log(index);  
// }


// let index = 0

// for (let index = 20; index > 0; index--) {
//    console.log(index);  
// }
// let i = 0

// for (let i = 1; i < 20; i ++) {
//     if (i%2==1) {
//         console.log(` ${i}is an odd number`)
//     }
//     else if(i%2==0){
//         console.log(` ${i}is an even number`)
//     }
//  }


//  for (let b = 0; b < 20; b++) {
//    let mult = `${b} * ${b} = ${b*b}`
//     console.log(mult)
//  }

//  let k = 0

//  while (k<20) {
//     if (k%2==1) {
//         console.log(k)
//     }
//     k++
//  }
//  let p = 0
//  do {
//     console.log(p)
//     p++
//  } while (p<20);


  let countires = ["Nigeria","Ghana", "congo","canada","togo"]
//  for (let g = 0; g < 5; g++) {
//     console.log(countires[g]);
    
//  }

//  let mystring = "javascript is sweet"
//  for (let y = 0; y < mystring.length; y++) {
//     console.log(mystring[y])
    
//  }
// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//  let sum = 0
//  for (let u = 0; u < number.length; u++) {
//     sum += number[u]
    
//  }
//  console.log(sum);

//  let ul = document.getElementById("ul")
//  let su= 0
//  for (let m = 0; m < number.length; m++) {
//     su += number[m]
//     ul.innerHTML += `<li>${su}</li>`
//     console.log(su)
    
//  }
// console.log(su)

// let ul = document.getElementById("ul")
// let newarr = []

// for (let t = 0; t < countires.length; t++) {
//    newarr.push(countires[t])
//    ul.innerHTML += `<li>${newarr[t]}</li>`
// }
let newArr = []
let newnew = document.getElementById("newnew")
for(const country of countires){
   newnew.innerHTML+=`<li>${country}</li>`
}


countires.forEach((index)=> {
   console.log(index)
})
//creat a password generator using 15character length