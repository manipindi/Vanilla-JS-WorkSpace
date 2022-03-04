/* let sayGoodMorning=()=>{
    let h1Tag=document.querySelector('#msg1');
    h1Tag.innerText='Good Morning';
    h1Tag.style.backgroundColor='brown';
    h1Tag.style.padding='10px';
    h1Tag.style.boxShadow='0 0 15px black';
};

let sayGoodAfternoon=()=>{
    let h1Tag=document.querySelector('#msg1');
    h1Tag.innerText='Good Afternoon';
    h1Tag.style.backgroundColor='brown';
    h1Tag.style.padding='10px';
    h1Tag.style.boxShadow='0 0 15px black';
};

let sayGoodEvening=()=>{
    let h1Tag=document.querySelector('#msg1');
    h1Tag.innerText='Good Evening';
    h1Tag.style.backgroundColor='brown';
    h1Tag.style.padding='10px';
    h1Tag.style.boxShadow='0 0 15px black';
};

let sayGoodNight=()=>{
    let h1Tag=document.querySelector('#msg1');
    h1Tag.innerText='Good Night';
    h1Tag.style.backgroundColor='brown';
    h1Tag.style.padding='10px';
    h1Tag.style.boxShadow='0 0 15px black';
};
*/ 

//Print Wish
let printWish=(message , color)=>{
    let h1Tag=document.querySelector('#msg1');
    h1Tag.innerText= message;
    h1Tag.style.backgroundColor= color;
    h1Tag.style.padding='10px';
    h1Tag.style.boxShadow='0 0 15px black';
};

//good morning button logic

let gmButton = document.querySelector('#gm-btn');
gmButton.addEventListener('click', function(){
    printWish('Good Morning', 'brown');
});

let gaButton = document.querySelector('#ga-btn');
gaButton.addEventListener('click', function(){
    printWish('Good Afternoon', 'brown');
});

let geButton = document.querySelector('#ge-btn');
geButton.addEventListener('click', function(){
    printWish('Good Evening', 'brown');
});

let gnButton = document.querySelector('#gn-btn');
gnButton.addEventListener('click', function(){
    printWish('Good Night', 'brown');
});

