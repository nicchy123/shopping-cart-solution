function getTextElementValueById(elementId) {
    const phoneTotalElement = document.getElementById(elementId);
    const phoneTotalElementString = phoneTotalElement.innerText;
    const phoneTotal = parseInt(phoneTotalElementString);
    return phoneTotal;
};
function setTextElementById(elementId, value){
    const subTotalField = document.getElementById(elementId);
    subTotalField.innerText = value;
}
function calculateSubTotal() {
    const currentPhoneTotal = getTextElementValueById('phn-total');
    const currentCaseTotal = getTextElementValueById('case-total');
    const currentSubTotal = currentCaseTotal + currentPhoneTotal;
    setTextElementById('sub-total', currentSubTotal);
    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementById('tax-amount', taxAmount);
    const finalAmount = currentSubTotal + taxAmount;
    setTextElementById('final-total', finalAmount);
};




