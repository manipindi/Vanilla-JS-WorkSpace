let textBox = document.querySelector('#user');
textBox.addEventListener('keyup', function(){
    let textEntered = textBox.value;
    let messageElement = document.querySelector('#msg');
    messageElement.innerText = textEntered;
});