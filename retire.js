let age = document.getElementById("age")
let button = document.getElementById("retire-man")
let inputedage = document.getElementById("inputed-age")
// let inputedage = document.getElementById("inputed-age")
let constantage = 65
let constantyear = 2024

button.addEventListener("click",()=>{
    let ages = parseInt(age.value);
    let oldage = constantyear - ages
    let retirementAge = constantage - oldage
    if (  retirementAge > 65 ) {
        inputedage.innerText = ` You should have retired ${-(retirementAge)} years ago`
    }
     else if (retirementAge < constantage && retirementAge > 0) {
        inputedage.innerText = `You are going to retire in ${retirementAge} years`
    }
    else if (retirementAge < 0) {
        inputedage.innerText = ` You should have retired ${-(retirementAge)} years ago`
    }
    else if (retirementAge = constantage) {
        inputedage.innerText = `Too young to work`
    }
    
    else if (retirementAge === 1 ) {
        inputedage.innerText = `You are to retire next year`
    }

    // else{
    //     inputedage.innerText = `${retirementAge}`
    // }
})






function calculateRetirement() {
    const birthYear = parseInt(document.getElementById('birthYear').value);
    const currentYear = 2024;
    const retirementAge = 65;
    
    if (isNaN(birthYear) || birthYear < 1900 || birthYear > currentYear) {
        document.getElementById('result').innerText = "Please enter a valid year of birth.";
        return;
    }
    
    const age = currentYear - birthYear;
    const retirementYear = birthYear + retirementAge;
    
    if (age < retirementAge) {
        const yearsLeft = retirementYear - currentYear;
        if (yearsLeft === 1) {
            document.getElementById('result').innerText = "You will retire next year.";
        } else {
            document.getElementById('result').innerText = `You will retire in ${yearsLeft} years.`;
        }
    } else if (age === retirementAge) {
        document.getElementById('result').innerText = "You are retiring this year!";
    } else {
        document.getElementById('result').innerText = "You are already retired.";
    }
}
