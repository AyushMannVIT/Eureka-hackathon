var points = 0;
var moneySpent = 0;
var moneyExpendition = document.getElementById('moneyExpendition');
var addExpenseButton = document.getElementById('addExpenseButton');
var removeExpenseButton = document.getElementById('removeExpenseButton');
var expenseInput = document.getElementById('expenseInput');
moneyExpendition.value = moneySpent;


function addMoney(){
    moneySpent += parseInt(expenseInput.value);
    moneyExpendition.value = moneySpent;
};

function removeMoney(){
    if(moneySpent ===0){
        alert('Cannot remove money from 0');
    }
    else{
    moneySpent -= parseInt(expenseInput.value);
    moneyExpendition.value = moneySpent;
}};

function conversion(moneySpent){
    points = moneySpent * 0.1;
    return points;
};