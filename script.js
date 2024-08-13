var points = 100;
var moneySpent = 0;
var timeSpent = 1;
var moneyExpendition = document.getElementById('moneyExpendition');
var addExpenseButton = document.getElementById('addExpenseButton');
var removeExpenseButton = document.getElementById('removeExpenseButton');

var timeExpendition = document.getElementById('timeExpendition');
var addTimeButton = document.getElementById('addTimeButton');
var removeTimeButton = document.getElementById('removeTimeButton');

var expenseInput = document.getElementById('expenseInput');
var profilePoints = document.getElementById('profilePoints');
moneyExpendition.value = moneySpent;
timeExpendition.value = timeSpent;

function addMoney(){
    moneySpent += parseInt(expenseInput.value);
    moneyExpendition.value = moneySpent;
    points -= moneySpent * 0.1;
};

function removeMoney(){
    if(moneySpent ===0){
        alert('Cannot remove money from 0');
    }
    else{
    moneySpent -= parseInt(expenseInput.value);
    moneyExpendition.value = moneySpent;
    points -= moneySpent * 0.1;
}};


function conversion(moneySpent){
    profilePoints.value = points;
    return points;
};

setInterval(function() {
    conversion(moneySpent);
    if (points <= 0){
        alert('You have no more points. Please spend money wisely.');
        breakloop;
    };
}, 1000);



function addTime(){
    alert('You are in ZEN MODE and cannot use laptop.')
    timeSpent += parseInt(timeInput.value);
    timeExpendition.value = timeSpent;
    points += timeSpent;
};

