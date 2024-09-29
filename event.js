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
// let newArr = []
// // let newnew = document.getElementById("newnew")
// // for(const country of countires){
// //    newnew.innerHTML+=`<li>${country}</li>`
// // }


// // countires.forEach((index)=> {
// //    console.log(index)
// // })
// //creat a password generator using 15character length

// //break and continue
// //stopp and start


// for (let d = 0; d < 20; d++) {
//    if (d == 15) {
//       continue
//    }
//    console.log(d)
// }

// //Array method
// //.join
// //object method
// let countires = ["Nigeria", "Ghana", "congo", "canada", "togo"]

// let person = {
//    name: "khaleed",
//    agge: 30,
//    class: "100 level",

// }
// let aboutme = `my name is ${person.name}`
// console.log(aboutme);

// let peple = {
//    canada: {
//       capital: "scarborg",
//       course: "web develop",
//       age: 30,
//       class: "100 level"
//    },
//    london: {
//       capital: "Abuja",
//       course: "web develop",
//       age: 30,
//       class: "100 level",
//    },

//    togo: {
//       capital: "Abuja",
//       course: "web develop",
//       age: 30,
//       class: "100 level"
//    },
// } 

// let about = `the name of this and the capital is ${peple.canada.capital}`
// console.log(about)

// //object methods


// let getkeys = Object.keys(peple)
// let getvalues = Object.values(peple)

// getkeys.forEach((countrycap)=>{
//    let details = `the name of the county is ${countrycap} `
//    console.log(details)
// })

// let peple2 = [
//   {
//       capital: "umaya",
//       course: "web develop",
//       age: 30,
//       class: "100 level"
//    },
//    {
//       capital: "abear",
//       course: "web develop",
//       age: 30,
//       class: "100 level",
//    },
//   {
//       capital: "togo",
//       course: "web develop",
//       age: 30,
//       class: "100 level"
//    },
// ] 

// person2.map(({capital})=>{
//   console.log(capital);
// })

// peple2.forEach(values => {
//    values.year = "2024"
//    console.log(values)
// });



//assign
// let me = {}
// Object.assign(me, peple.canada)
// console.log(me)


// //how to style dynamically 
//  let getH1 =  document.querySelector("h1")

// let myStyle = {
//    background: 'red',
//    padding: '20px',
//    borderRadius: '10px',
//    border: '2px solid gold',
// }

// Object.assign(getH1.style, myStyle)

//date object and  its method

// let getCorrectDate = new Date ()

// console.log(getCorrectDate.getFullYear());
// console.log(getCorrectDate.getMonth()+1);
// console.log(getCorrectDate.getDate());
// console.log(getCorrectDate.getDay()+1);
// console.log(getCorrectDate.getMinutes());
// console.log(getCorrectDate.getSeconds());
// console.log(getCorrectDate.getMilliseconds());
// //spread opertor under object

// let greeting = document.getElementById("greet")
// let yourname = prompt("what is your name")

// if(getCorrectDate.getHours()>= 12){
//    greeting.innerText = `Good afternoon ${yourname.toUpperCase()}`
// }
// else{
//    greeting.innerText= `Good day ${yourname.toUpperCase()}`
// }

//distructring spread or rest operator

// let myCountires = ["Nigeria", "Ghana", "congo", "canada", "togo"]

// const[on, tur, to, yo, mo ,sx = "togo"] = myCountires

// console.log(on)

// let fullStack = [
//    ["HTML", "CSS", "JAVASCRIPT"],
//    ["PYTHON", "REACT.JS", "PHP"],
//    ["c++", "c+", "java"],
//    ["fluter", "node js", "adm"],
// ]


// fullStack.forEach(([first, second, third]) => {
//    console.log(first, second, third)
// });


const erson = {
   name: "kahmi",
   skills: ["HTML", "CSS", "JAVASCRIPT"],
   score: 100,
}
const { name, skills, score } = erson

const myStudent = [
   ['David', ['HTML', 'CSS', 'JS', 'REACT'], [98, 85, 90, 95]],
   ['Kahmi', ['ATM', 'CSA', 'PC', 'REACT'], [96, 67, 40, 65]],
   ['siico', ['OTP', 'P0P', 'C++', 'REACT'], [98, 85, 20, 75]],
   ['paul', ['SIC', 'POP', 'C+', 'REACT'], [98, 15, 40, 85]],
]

let listPerson = []
myStudent.map(([firstName, Courses, firstScore]) => {
   let myPerson = {
      firstname: firstName,
      mycourse: Courses,
      firstscore: firstScore

   }
   listPerson.push(myPerson)

})
console.log(listPerson)


let person2 = [

]


//spread or rest operstor

let sum = 0
function allnums(...randnums) {
   randnums.forEach((i) => {
      sum += i
   })
   console.log(sum);
}

allnums(3, 5, 6, 7, 8, 3, 6, 2, 8, 3, 3, 56, 23)

//regular expression and form validation
//.match() returns an array if expressinonm is ture
//.test() returns a bolean t or f
// calt i-- medai for firefox
//^ stat with
// $ ends with
// {}
//?=.* at least

let emailpattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
let passwordpattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/

let numberpattern = /^[0-9]+$/
let textpattern = /^[0-9a-zA-Z]+$/
let anyvalue = /^[0-9a-zA-Z]{3,20}$/


let check = "UUUUUUUUgggg6666@gmailcom"
console.log(check.match(passwordpattern));
console.log(passwordpattern.test(check));



//getting the input 
let myform = document.getElementById("form")
// let sub = document.getElementById("sub")
let texterror = document.getElementById("texterror")
let passworderror = document.getElementById("passworderror")


myform.addEventListener("submit", (event) => {
   event.preventDefault()
   
   let text = document.getElementById("text").value
   let password = document.getElementById("password").value
   
   let ifvalid = true 

   if (!text.match(textpattern)) {
      console.log("this is not a valid text");
      ifvalid = false
   }
   if (!password.match(passwordpattern)) {
      console.log("password should have lowercase , uppercase , symbols and number");
      ifvalid = false
   }
   if (ifvalid) {
      myform.submit()
      alert("form submitted successfully")
   }
   
})
//texterroe.innertext = ""


