// js my way


const noOfPeople = document.querySelector('#people-input');
const billInput = document.querySelector('#bill-input');
const reset = document.querySelector('.reset');

const amountOutput = document.querySelector('#amount');
const tipAmountOutput = document.querySelector('#tip-amount');

noOfPeople.addEventListener('change', update);
billInput.addEventListener('change', update);
reset.addEventListener('click', clear);


const five = document.querySelector('#five');
const ten = document.querySelector('#ten');
const fifteen = document.querySelector('#fifteen');
const twentyFive = document.querySelector('#twentyfive');
const fifty = document.querySelector('#fifty');
 

function clear() {
    billInput.value = "";
    noOfPeople.value = "";
    tipAmountOutput.innerHTML = '0.00';
    amountOutput.innerHTML = '0.00';
};

function update() {

    const people = noOfPeople.value;
    const bill = billInput.value;

    five.addEventListener('click', () => {
        var tipAmount = bill * 0.05 * people;
        tipAmountOutput.innerHTML = (tipAmount);
        amountOutput.innerHTML = (tipAmount / people);
        console.log(tipAmount)
    });
    ten.addEventListener('click', () => {
        var tipAmount = bill * 0.10 * people;
        tipAmountOutput.innerHTML = (tipAmount);
        amountOutput.innerHTML = (tipAmount / people);
        console.log(tipAmount)
    });
    fifteen.addEventListener('click', () => {
        var tipAmount = bill * 0.15 * people;
        tipAmountOutput.innerHTML = (tipAmount);
        amountOutput.innerHTML = (tipAmount / people);
        console.log(tipAmount)
    });
    twentyFive.addEventListener('click', () => {
        var tipAmount = bill * 0.25 * people;
        tipAmountOutput.innerHTML = (tipAmount);
        amountOutput.innerHTML = (tipAmount / people);
        console.log(tipAmount)
    });
    fifty.addEventListener('click', () => {
        var tipAmount = bill * 0.5 * people;

        tipAmountOutput.innerHTML = (tipAmount);
        amountOutput.innerHTML = (tipAmount / people);
        console.log(tipAmount)
    });
        fifty.addEventListener('click', () => {
        var tipAmount = bill * 0.5 * people;

        tipAmountOutput.innerHTML = (tipAmount);
        amountOutput.innerHTML = (tipAmount / people);
        console.log(tipAmount)
    });


};
