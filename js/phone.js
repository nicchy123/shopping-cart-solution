function updatePhoneNumber(isIncrease) {
    const phoneNumberField = document.getElementById('phn-number-field');
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberString);
    let newPhoneNumber;
    if (isIncrease) {
        newPhoneNumber = previousPhoneNumber + 1;
    } else {
        newPhoneNumber = previousPhoneNumber - 1;
    }
    phoneNumberField.value = newPhoneNumber;
    return newPhoneNumber;
};
 function updatePhonePrice(newPhoneNumber){
    const phonePrice = newPhoneNumber * 1219;
     const phonePriceField = document.getElementById('phn-total');
     phonePriceField.innerText = phonePrice;
};

document.getElementById('btn-phn-plus').addEventListener('click',function(){
    const newPhoneNumber = updatePhoneNumber(true);
    updatePhonePrice(newPhoneNumber);
    calculateSubTotal()

});

document.getElementById('btn-phn-minus').addEventListener('click',function(){
    const newPhoneNumber = updatePhoneNumber(false);
    updatePhonePrice(newPhoneNumber);
    calculateSubTotal()
});
