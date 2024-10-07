
const myusers = [
  {
    name: 'Brook',
    scores: 75,
    skills: ['HTMl', 'CSS', 'JS'],
    age: 16
  },
  {
    name: 'Alex',
    scores: 80,
    skills: ['HTML', 'CSS', 'JS', 'REACT'],
    age: 18
  },
  {
    name: 'David',
    scores: 75,
    skills: ['HTML', 'CSS'],
    age: 22
  },
  {
    name: 'John',
    scores: 85,
    skills: ['HTML'],
    age: 25
  },
  {
    name: 'Sara',
    scores: 95,
    skills: ['HTML', 'CSS', 'JS'],
    age: 26
  },
  {
    name: 'Martha',
    scores: 80,
    skills: ['HTML', 'CSS', 'JS'],
    age: 18
  },
  {
    name: 'Matthew',
    scores: 60,
    skills: [],
    age: 22
  },
  {
    name: 'Thomas',
    scores: 90,
    skills: ['HTML', 'CSS', 'DART', 'KOTLIN'],
    age: 20
  },
  {
    name: 'Promise',
    scores: 90,
    skills: ['HTML', 'CSS', 'JS', 'FLUTTER'],
    age: 20
  }
]
let newarr = []
myusers.map(({ name }) => {
  let nwy = name 
  newarr.push(nwy)
})
console.log(newarr);
let arr = []
myusers.map(({ name, skills}) => {
  let ski = skills
  if (ski.length<=2) {
    arr.push(name)  
  }
})
console.log(arr)
// console.log("=============<<<<<<<<<>>>>>>>>>>>>>>===========")
// //Spread and Rest Opertsor
// let sum = 0
// function allnums(...randnums){
//    randnums.forEach((i)=>{
//       sum += i
//    })
//    console.log(sum);
// }
// allnums(3,5,6,7,8,3,6,2,8,3,3,56,23)

let answer = document.getElementById("answer")
let button = document.getElementById("buton")
let store = document.getElementById("storerage")

button.addEventListener("click",()=>{
  store.innerHTML = `${newarr} \n ${arr}`

})
