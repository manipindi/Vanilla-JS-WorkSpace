let formatNum = (number) =>{
    let res = new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(number);
    return res;
};

let rangeEl = document.querySelector('#range');
let amountEl = document.querySelector('#amount');

rangeEl.addEventListener('input', function(){
    let selectedAmount = rangeEl.value;
    amountEl.innerText = formatNum(selectedAmount);
});