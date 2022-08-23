
let playerNumber;
// eventListener for calculate button

document.getElementById('calculate-btn').addEventListener('click', function () {
        // getting per player cost from per player input field 
    const perPlayerInputCost = gettingValueFromInputField('per-player-cost-input-field');
  //    calculating total expenses of players
    
    if (isNaN(playerNumber)){
                //validation for empty player field 
        alert('You must need to select player first')
        document.getElementById('per-player-cost-input-field').value = '';
    }
    else if(playerNumber>0 && playerNumber<=5) {
            const totalPlayerExpense = playerNumber * perPlayerInputCost;
        if (isNaN(totalPlayerExpense)) {
            settingValueOnId('total-player-expense', '00');
        }
        else {
            settingValueOnId('total-player-expense', totalPlayerExpense);
        }
    }
            
    // setting total expenses in id of total expenses
    
   

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
        document.getElementById('manager-cost-input-field').value = '';
        document.getElementById('coach-cost-input-field').value = '';
    }
    else {
        // performing addition of players cost , manager cost and coach cost
        const totalCost = totalPlayerExpense + costOfManager + costOfCoach
        // setting value of total cost in total cost id 
        settingValueOnId('grand-total', totalCost);
    }
})



//                 selection of 5 players
// declaring array
const array = [];
// selecting all select button by using class
const selectedPlayer = document.getElementsByClassName('selected-btn');


// validation for more than 5 selected player


let count=0;
    for (let i = 0; i < selectedPlayer.length; i++){
        selectedPlayer[i].addEventListener('click', function (event) {
        
        const textParentNode = event.target.parentNode.parentNode;
        

        const name = textParentNode.getElementsByClassName('name')[0].innerText;
        
        
        if (count < 5) {
            array.push(name);
            count++;
            const btnId = event.target.id;
            document.getElementById(btnId).disabled = true;
            playerNumber = displaySelectedPlayer(array);
           
        }
        else {
             alert('You have already selected 5 players');
         }
        

    })
        
}
