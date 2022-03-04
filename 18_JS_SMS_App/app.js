let textAreaEl = document.querySelector('#text-area');
let charCountEl = document.querySelector('#char-count');

textAreaEl.addEventListener('keyup', function() {
    let textLen = textAreaEl.value.length;
    charCountEl.innerText = textLen;

});