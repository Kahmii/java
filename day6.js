let plus = document.getElementById("add")
let minuss = document.getElementById("minus")
let divi = document.getElementById("divid")
let mul = document.getElementById("multi")
let input_1 = document.getElementById("input1")
let input_2 = document.getElementById("input2")
let result = document.getElementById("output")
let sum1 = document.getElementById("in1")
let sum2 = document.getElementById("in2")
let amoun = document.getElementById("Amount")
let outin = document.getElementById("out")
let ini1 = document.getElementById("invested")
let ini2 = document.getElementById("times")
let comot = document.getElementById("ok")
let leo = document.getElementById("loa")

function plusy() {
    let input1 = parseInt(input_1.value);
    let input2 = parseInt(input_2.value);
    let output1 = input1 + input2;
    spanclass.textContent = "+";
    if (isNaN(input1) || isNaN(input2)) {
        document.getElementById("output1").textContent = "That is not a number";
    }
    else {
        result.textContent = output1
    }
}

function miny() {
    let input1 = parseInt(input_1.value);
    let input2 = parseInt(input_2.value);
    let output1 = input1 - input2;
    spanclass.textContent = "-";
    if (isNaN(input1) || isNaN(input2)) {
        document.getElementById("output1").textContent = "That is not a number";
    }
    else {
        result.textContent = output1
    }
}

function multiy() {
    let input1 = parseInt(input_1.value);
    let input2 = parseInt(input_2.value);
    let output1 = input1 * input2;
    spanclass.textContent = "*";
    if (isNaN(input1) || isNaN(input2)) {
        document.getElementById("output1").textContent = "That is not a number";
    }
    else {
        result.textContent = output1
    }
}
function diviy() {
    let input1 = parseInt(input_1.value);
    let input2 = parseInt(input_2.value);
    let output1 = input1 / input2;
    spanclass.textContent = "/";
    if (isNaN(input1) || isNaN(input2)) {
        document.getElementById("output1").textContent = "That is not a number";
    }
    else {
        result.textContent = output1
    }
}

function loans() {
    if (sum1.value==='' || sum2.value==='') {
        
        document.getElementById('out').textContent = `input your amount`;
    }
    else{
    let cash = parseInt(sum1.value);
    let time = parseInt(sum2.value);
    let aountt = 15 / 100 * cash + cash;
    let final = aountt - cash;
    let total  = (final + cash)*time
    document.getElementById('out').textContent = `you are paying us ${final} interest monthly and a total of ${total} at the end of ${time} month`;
}
}

function invest() {
    if (ini1.value === '' || ini2.value ==='') {

        document.getElementById('ok').textContent = `input your amount`;
    }
    else {
        let price = parseInt(ini1.value);
        let second = parseInt(ini2.value);
        let final = (15 / 100 * price + price)* second;
        document.getElementById('ok').textContent = `you are going to collect ${final} within ${second} month`;
    }
}

let age = document.getElementById("age");
let button = document.getElementById("retire-man");
let inputedage = document.getElementById("inputed-age");
let constantage = 65;
let constantyear = 2024;

button.addEventListener("click", () => {
    let ages = parseInt(age.value);
    if (isNaN(ages) || ages <= 0) {
        inputedage.innerText = "Please enter a valid year of birth.";

    }

    let oldage = constantyear - ages;
    let retirementAge = constantage - oldage;

    if (retirementAge < 0) {
        inputedage.innerText = `You should have retired ${-(retirementAge)} years ago.`;
    } else if (retirementAge > 1) {
        inputedage.innerText = `You are going to retire in ${retirementAge} years.`;
    } else if (retirementAge === 1) {
        inputedage.innerText = `You are to retire next year.`;
    } else if (retirementAge === 0) {
        inputedage.innerText = `You are retiring this year.`;
    } else {
        inputedage.innerText = `Please input a valid age.`;
    }
});
