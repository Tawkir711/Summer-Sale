
function setElementValue(elementId, value){
    const elementBox = document.getElementById(elementId)
    elementBox.innerText = value.toFixed(2);
}

let totalPrice = 0 ;
function productAdded(cardDiv){
    // console.log(cardDiv.children[1].children[1].innerText);
    // console.log(cardDiv.children[1].children[2].children[0]);
    let productName = cardDiv.children[1].children[1].innerText;
    let productPriceString = cardDiv.children[1].children[2].children[0].innerText;
    let productPrice = parseFloat(productPriceString);
    const productItem = document.createElement('li');
    productItem.innerText =productName;
    const listParent = document.getElementById('list-container')
    listParent.appendChild(productItem);
    // console.log(productPrice);
    totalPrice = totalPrice + productPrice;
    setElementValue('total-price', totalPrice );

    setElementValue('total-balance', totalPrice);
    
    if(totalPrice > 0){
         document.getElementById('btn-purchase').removeAttribute('disabled');
    }
    if(totalPrice > 200){
        document.getElementById('apply-btn').removeAttribute('disabled');
    }
}
document.getElementById('apply-btn').addEventListener('click', function(){
    // console.log('kaj hoice');
    const inputField = document.getElementById('input-field');
    const inputFieldValue =inputField.value;
    // console.log(inputFieldValue);
    if(inputFieldValue == 'SELL200'){
        let total = document.getElementById('total-price');
        let totalPrice = parseFloat(total.innerText);
        let discountPrice =  totalPrice * 20 / 100;
        let remainingTotalPrice = totalPrice - discountPrice;
        setElementValue('discount', discountPrice );
        setElementValue('total-balance', remainingTotalPrice);
    }else{
        alert('invalid discount code')
      return;
    }
    
})
