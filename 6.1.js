let plus_i = document.getElementById("plus");
let minus_i = document.getElementById("minus");
let divide_i = document.getElementById("divide");
let multiply_i = document.getElementById("multi");
let num1 = document.getElementById("first");
let num2 = document.getElementById("second");
let span = document.getElementById("myspan")
let amount = document.getElementById('Amount');
let time = document.getElementById('time');
let loan_button = document.getElementById('loan');
// let invest = document.getElementById("invest");
// let investion_date = document.getElementById('investion_date');


function invest (){
    let amount_invested = document.getElementById('Amount_Invested').value;
    let time = document.getElementById('timei').value;
    let totali = 15/100 *amount_invested + amount_invested;
    document.getElementById("sooooo").textContent = `you will be paid a total of $${totali} within a total of ${time} month's`

}