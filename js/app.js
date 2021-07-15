const noOfPeople = document.querySelector('#people-input');
const billInput = document.querySelector('#bill-input');
const reset = document.querySelector('.reset');

const amount = document.querySelector('#amount');
const tipAmount = document.querySelector('#tip-amount');

noOfPeople.addEventListener('change', update);
billInput.addEventListener('change', update);
reset.addEventListener('click', update);

function update() {
var n =parseInt(noOfPeople);
  var n=  n.toString().split('.');

    console.log(billInput.value);
    console.log(noOfPeople.value);

    var tipAmountUotput = billInput.value * noOfPeople.value;
    var totalOutput = billInput.value * noOfPeople.value;



const fiveBtn =document.querySelector('#five');

const tenBtn =document.querySelector('#ten');
const fifteenBtn =document.querySelector('#fifteen');
const twentyFive =document.querySelector('#fifty');
const fifty =document.querySelector('#twentyfive');
const customBtn = document.querySelector('#custom');
  

fiveBtn.addEventListener('click', buttonclick);
function buttonclick(){

   
    var tipAmountUotput = billInput.value * noOfPeople.value *0.05;
    tipAmount.innerHTML = totalOutput;
    amount.innerHTML = (totalOutput)/ (noOfPeople.value);
}
tenBtn.addEventListener('click', buttonclick);
function buttonclick(){

   
    var tipAmountUotput = billInput.value * noOfPeople.value *0.10;
    tipAmount.innerHTML = tipAmountUotput;
    amount.innerHTML = (totalOutput)/ (noOfPeople.value);
}
};

reset.addEventListener('click', ()=>{
    var tipAmountUotput = 0.00;
    var totalOutput = 0.00;

    tipAmount.innerHTML = totalOutput;
    amount.innerHTML = tipAmountUotput;



});

console.log(reset);