//form validation
let registraionForm = document.querySelector('#reg-form');
registraionForm.addEventListener('submit', function(event){
    event.preventDefault();// stops auto form submission
    if (validateForm()) {
        alert('Form Submitted Successfully');
    }
});

let validateForm = () => {
    return (checkUserName() & checkEmail() & checkPassword() & confirmPassword());
};

let checkUserName = () => {
    let inputEl = document.querySelector('#username');
    let inputFeed = document.querySelector('#username-feed');
    let regExp = /^[a-zA-Z0-9]{4,10}$/;
    if(regExp.test(inputEl.value)){
        makeValid(inputEl,inputFeed);
        return true;
    }
    else{
        makeInValid(inputEl,inputFeed);
        return false;
    }
};

//check mail
let checkEmail = () => {
    let inputEl = document.querySelector('#email');
    let inputFeed = document.querySelector('#email-feed');
    let regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(regExp.test(inputEl.value)){
        makeValid(inputEl,inputFeed);
        return true;
    }
    else{
        makeInValid(inputEl,inputFeed);
        return false;
    }
};

//password check
let checkPassword = () => {
    let inputEl = document.querySelector('#password');
    let inputFeed = document.querySelector('#password-feed');
    let regExp = /^[A-Za-z]\w{7,14}$/;
    if(regExp.test(inputEl.value)){
        makeValid(inputEl,inputFeed);
        return true;
    }
    else{
        makeInValid(inputEl,inputFeed);
        return false;
    }
};


let confirmPassword = () => {
    let inputEl = document.querySelector('#c_password');
    let passEl = document.querySelector('#password');
    let inputFeed = document.querySelector('#c_passwordFeed');
    let regExp = /^[A-Za-z]\w{7,14}$/;
    if(regExp.test(inputEl.value) && inputEl.value === passEl.value){
        makeValid(inputEl,inputFeed);
        return true;
    }
    else{
        makeInValid(inputEl,inputFeed);
        return false;
    }
};

let makeValid =  (inputEl,inputFeed) =>{
    inputEl.classList.add('is-form-valid');
    inputEl.classList.remove('is-form-invalid');
    inputFeed.classList.add('text-success');
    inputFeed.classList.remove('text-danger');
    inputFeed.innerText = 'Looks Good';

};

let makeInValid =  (inputEl,inputFeed) =>{
    inputEl.classList.remove('is-form-valid');
    inputEl.classList.add('is-form-invalid');
    inputFeed.classList.remove('text-success');
    inputFeed.classList.add('text-danger');
    inputFeed.innerText = 'Enter Valid Data';

};


//username field with keyup event
let userNameEl = document.querySelector('#username');
userNameEl.addEventListener('keyup', function(){
    checkUserName();
});

//email field with keyup event
let emailEl = document.querySelector('#email');
emailEl.addEventListener('keyup', function(){
    checkEmail();
});

let passwordEl = document.querySelector('#password');
passwordEl.addEventListener('keyup', function(){
    checkPassword();
});

let confirmPassEl = document.querySelector('#c_password');
confirmPassEl.addEventListener('keyup', function(){
   confirmPassword();
});