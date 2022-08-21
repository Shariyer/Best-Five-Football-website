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