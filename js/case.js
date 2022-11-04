function updateCaseNumber(isIncrease){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const PreviousCaseNumber = parseInt(caseNumberString);
    let newCaseNumber;
    if(isIncrease){
        newCaseNumber = PreviousCaseNumber + 1;
    }else{
        newCaseNumber = PreviousCaseNumber - 1;
    }
    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
};
function setCaseTotalPrice(newCaseNumber){
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalField = document.getElementById('case-total');
    caseTotalField.innerText = caseTotalPrice;
};
document.getElementById('btn-case-plus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(true);
    setCaseTotalPrice(newCaseNumber);
    calculateSubTotal()

})
document.getElementById('btn-case-minus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(false);
    setCaseTotalPrice(newCaseNumber);
    calculateSubTotal()
})
