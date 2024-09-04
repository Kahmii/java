let plus = document.getElementById("add")
let minuss = document.getElementById("minus")
let divi = document.getElementById("divid")
let mul = document.getElementById("multi")
let input_1 =  document.getElementById("input1")
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

function plusy () {
    let input1 = parseInt(input_1.value);
    let input2 = parseInt(input_2.value);
    let output1 = input1 + input2;
    spanclass.textContent = "+";
    if (isNaN(input1) || isNaN(input2)){
        document.getElementById("output1").textContent = "That is not a number";
    }
    else{
        result.textContent = output1
    }
}

function miny () {
    let input1 = parseInt(input_1.value);
    let input2 = parseInt(input_2.value);
    let output1 = input1 - input2;
    spanclass.textContent = "-";
    if (isNaN(input1) || isNaN(input2)){
        document.getElementById("output1").textContent = "That is not a number";
    }
    else{
        result.textContent = output1
    }
}

function multiy () {
    let input1 = parseInt(input_1.value);
    let input2 = parseInt(input_2.value);
    let output1 = input1 * input2;
    spanclass.textContent = "*";
    if (isNaN(input1) || isNaN(input2)){
        document.getElementById("output1").textContent = "That is not a number";
    }
    else{
        result.textContent = output1
    }
}
function diviy () {
    let input1 = parseInt(input_1.value);
    let input2 = parseInt(input_2.value);
    let output1 = input1 / input2;
    spanclass.textContent = "/";
    if (isNaN(input1) || isNaN(input2)){
        document.getElementById("output1").textContent = "That is not a number";
    }
    else{
        result.textContent = output1
    }
}

function loans (){
    let cash = parseInt(in1.value);
    let time = parseInt(in2.value);
    let aountt = 15 / 100 * cash + cash;
    document.getElementById('out').textContent = `you are paying us ${aountt}`;
}

function invest (){
    let price = parseInt(ini1.value);
    let second = parseInt(ini2.value);
    let final = 15/100 * price + price;
    document.getElementById('ok').textContent = `you are going to collect ${final} within ${second} month`;
}