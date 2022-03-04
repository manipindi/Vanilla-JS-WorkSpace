let numberEl = document.querySelector('#req-num');
numberEl.addEventListener('input', function(){
    let numValue = Number(numberEl.value);
    document.querySelector('#num1').innerText = numValue;
    calculate(); 
});

//input 
let rangeEl = document.querySelector('#customRange');
rangeEl.addEventListener('input', function(){
    let selectedVal = Number(rangeEl.value);
    document.querySelector('#num2').innerText = selectedVal;
    calculate();
});


//result function

let calculate = () => {
    let theNum = Number(document.querySelector('#num1').innerText);
    let multi = Number(document.querySelector('#num2').innerText);
    let theResult = theNum * multi;
    document.querySelector('#res').innerText = theResult;
};
