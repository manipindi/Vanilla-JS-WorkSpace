let passwordBox = document.querySelector('#password');
let checkBox= document.querySelector('#checkbox');

checkBox.addEventListener('change', function(){
    let attributeType = passwordBox.getAttribute('type');
    if (attributeType==='password') {
        passwordBox.setAttribute('type', 'text');
    }
    else{
        passwordBox.setAttribute('type', 'password');
    }
    
});

//to chane attributes we have two functions
//getAttributes('src)
//setAttributes('src,'mani.jpg')