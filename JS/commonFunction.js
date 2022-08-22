                // to get value from input field
function gettingValueFromInputField(idTypeString) {
    const inputValueString = document.getElementById(idTypeString);
    const inputValue = inputValueString.value;
    // number validation for input field
    if (isNaN(inputValue) ) {
        alert('Please provide numbers in Input Field')
        inputValueString.value = '';
    }
    else {
        const inputValueInt = parseInt(inputValue);
         return inputValueInt;
    }
   
}

// setting the value in specific id 
function settingValueOnId(idTypeString, value) {
    document.getElementById(idTypeString).innerText = value;

}
// getting integer value from specific id  
function gettingValueFromIdInt(idTypeString) {
   const inputValueString = document.getElementById(idTypeString);
    const inputValue = inputValueString.innerText;
    const inputValueInt = parseInt(inputValue);
    return inputValueInt;  

}
// function for displaying players
function displaySelectedPlayer(array) {
    // validation for more than 5 players 
    if (array.length <= 5) {
         const playerBillboard = document.getElementById('show-players')
        playerBillboard.innerHTML = "";
        for (i = 0; i < array.length; i++){
            
            const name = array[i];
            const serialId = i+1;
            // console.log('serial:'+ serialId+ " "+name)
            const tr = document.createElement('tr');
            tr.innerHTML = `<th>${serialId}</th>
                <td>${name}</td> `;

            playerBillboard.appendChild(tr);        
        }
    }
    // invalid condition 
    else (
        // validation for more than 5 players
        alert('You Have already selected 5 Players')
    )
}