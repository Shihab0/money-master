const foodField = document.getElementById('food-field');
const rentField = document.getElementById('rent-field');
const clothField = document.getElementById('cloth-field');
const totalExpensesField = document.getElementById('total-expenses');
const totalBalanceField = document.getElementById('total-balance');


function getInputValueById(inputId){
    const targetField = document.getElementById(inputId);
    const targetString = targetField.value ;
    const targetValue = parseFloat(targetString);
    return targetValue;
}
function getElementInnerTextById(elementId){
    const targetElement = document.getElementById(elementId);
    const targetString = targetElement.innerText;
    const targetedInnerText = parseFloat(targetString);
    return targetedInnerText;
}

document.getElementById('calculate-btn').addEventListener('click', function(){
    const foodValue = getInputValueById('food-field');
    const rentValue = getInputValueById('rent-field');
    const clothValue = getInputValueById('cloth-field');

    
    foodField.value = '';
    rentField.value = '' ;
    clothField.value = '' ;
    

    if(isNaN(foodValue) || isNaN(rentValue) || isNaN(clothValue)){
        alert('Enter A Valid Amount')
        return;
    }

    const newTotalExpenses = foodValue + rentValue + clothValue;

    const income = getInputValueById('income-field');
    const balanceAfterExpenses = income;
    
    totalBalanceField.innerText = balanceAfterExpenses;
    
    const previousTotalExpenses = getElementInnerTextById('total-expenses');
    const finalTotalExpenses = newTotalExpenses + previousTotalExpenses;

    
    const previousBalance = getElementInnerTextById('total-balance');
    const finalTotalBalance = previousBalance - finalTotalExpenses;
    
    if(finalTotalBalance < newTotalExpenses){
        alert('You Have Not Enough Balance');
        return;
    }
    
    totalExpensesField.innerText = finalTotalExpenses;
    totalBalanceField.innerText = finalTotalBalance;   
})


document.getElementById('save-btn').addEventListener('click', function(){
    const savingValue = getInputValueById('save-field');

    if(savingValue > 100){
        alert('You Can Not Save Up 100%');
        return;
    }

    const incomeValue = getInputValueById('income-field');
    const savings = incomeValue * (savingValue/100);
    const totalSaveField = document.getElementById('total-save');

    totalSaveField.innerText = savings;

    const balance = getElementInnerTextById('total-balance');
    const remaningBalanceField = document.getElementById('remaining-balance');
    remaningBalanceField.innerText = balance - savings;
})