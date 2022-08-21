
const playerNumber = 5;
// eventListener for calculate button

document.getElementById('calculate-btn').addEventListener('click', function () {
        // getting per player cost from per player input field 
    const perPlayerInputCost = gettingValueFromInputField('per-player-cost-input-field');
  //    calculating total expenses of players
    const totalPlayerExpense = playerNumber * perPlayerInputCost;
    // setting total expenses in id of total expenses
    
    if (isNaN(totalPlayerExpense)) {
        settingValueOnId('total-player-expense', '00');
    }
    else {
        settingValueOnId('total-player-expense', totalPlayerExpense);
    }

})

// evenListener for calculate total button 
document.getElementById('calculate-total-btn').addEventListener('click', function () {
    // getting  manager cost from manager cost input field 
    const costOfManager = gettingValueFromInputField('manager-cost-input-field');
    // getting coach cost from coach cost input field
    const costOfCoach = gettingValueFromInputField('coach-cost-input-field');
    //getting value of total player expenses
    const totalPlayerExpense=gettingValueFromIdInt('total-player-expense')
    if (totalPlayerExpense === 0) {
        
        // validation for per player empty field
        alert('Please provide per player cost first and calculate player expenses');
    }
    else {
        // performing addition of players cost , manager cost and coach cost
        const totalCost = totalPlayerExpense + costOfManager + costOfCoach
        // setting value of total cost in total cost id 
        settingValueOnId('grand-total', totalCost);
    }
})