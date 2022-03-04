/*let textBox = document.querySelector('#user');
textBox.addEventListener('keyup', function(){
    let textEntered = textBox.value;
    let messageElement = document.querySelector('#msg');
    messageElement.innerText = textEntered;
});
*/

let selectOption = document.querySelector("#selectOpt");
selectOption.addEventListener('change', function(){
    let selected = selectOption.value;
    document.querySelector("#msg").innerText= selected;
});