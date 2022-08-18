function getVal(getFromId)
{
    const val = document.getElementById(getFromId).value;
    return (val);
}

function getInnerText(getInnerTextFromId)
{
    const val = document.getElementById(getInnerTextFromId).innerText;
    const textValue = parseFloat(val);
    return (textValue);
}

function updateVal(getFromUpId, value){
    let val = document.getElementById(getFromUpId).innerText;
    val = value;
    const currentValue = val;
    const updatedCurrentValue = parseFloat(currentValue);
    return document.getElementById(getFromUpId).innerText = updatedCurrentValue;
}


//------------------------ amount part ---------------------

document.getElementById('get-amount').addEventListener('keyup', function(){
    let amount = getVal('get-amount');
    
 
// Input Validation 
    if(isNaN(amount)){
        alert("Please Enter a valid amount!");
        let input = document.getElementById("get-amount")
        input.value = "";
        return;
    }


document.getElementById('amount-update');
updateVal('amount-update', amount);


document.addEventListener("keyup", function(event) {
    if (event.key === 'Enter') {
      let input = document.getElementById("get-amount")
      input.value = "";
    }
  });
      
});





//---------------------- discount part------------------------

document.getElementById('get-discount').addEventListener('keyup', function(){
    let discount = getVal('get-discount');


    // Input Validation 
    if(isNaN(discount)){
        alert("Please Enter a valid discount!");
        let input = document.getElementById("get-discount")
          input.value = "";
          return;
    }

    document.getElementById('discount-update');
    updateVal('discount-update', discount);
    
    document.addEventListener("keyup", function(event) {
        if (event.key === 'Enter') {
          let input = document.getElementById("get-discount")
          input.value = "";
        }
      });
      
});


// ----------------attribute anabling part-------------------

document.getElementById('confirm-text').addEventListener('keyup', function(event){
    const valueChecker = event.target.value;

    const confirmButton = document.getElementById('confirm-btn');
    
    if(valueChecker === 'confirm'){
        confirmButton.removeAttribute('disabled');
    }
    else{
        confirmButton.setAttribute('disabled', true);
    }
    

// ----------------calculation part -----------------

document.getElementById('confirm-btn').addEventListener('click', function(){

    let updatedAmount = getInnerText('amount-update');
    let updateDiscount = getInnerText('discount-update');

    let discountCalculation = updatedAmount * (updateDiscount/100);
    let toPay = updatedAmount - discountCalculation;
    

    document.getElementById('total-update');
    updateVal('total-update', toPay);
   
   
    let input = document.getElementById("confirm-text")
    input.value = "";
    
});


});
