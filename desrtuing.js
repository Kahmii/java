let peple2 = [
    {
        capital: "umaya",
        course: "web develop",
        age: 30,
        class: "100 level"
     },
     {
        capital: "abear",
        course: "web develop",
        age: 30,
        class: "100 level",
     },
    {
        capital: "togo",
        course: "web develop",
        age: 30,
        class: "100 level"
     },
  ] 
  
  peple2.map(({capital})=>{
    console.log(capital);
  })

  //Spread or  rest operator (...)

  let me = ['html', 'css' ,'js']
  let you = ["Python", "node","php"]

  const myfullStack = [...me,...you]
  console.log(myfullStack)