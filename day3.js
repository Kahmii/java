let kSelf = {
        name: "Khaleed oladejo",
        age: 21,
        sex: "male",
        school: "ajayi crowther university",
        it: "valuemax",
        dicriptio: "im 6,2 , i'd rather play basket ball than football , i'd rather meditate than eat cause why not i gas keep my steeze",
    }
  let show = document.getElementById("meself") 

  function me () {
    let all = `my name is ${kSelf.name}, i'm ${kSelf.age} years old Im a ${kSelf.sex}The name of my school is ${kSelf.school} i do my it at ${kSelf.it} this is more about me ${kSelf.dicriptio}`
    show.innerText = all
}
