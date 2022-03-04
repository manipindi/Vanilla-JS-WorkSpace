console.log(document);

let navTag = document.querySelector('nav a ');
console.log(navTag);

//text inside anchor tag

let inText=navTag.innerText;
console.log(inText);

//change innertext
navTag.innerText='Manikanta Pindi';

let TitleChange = document.querySelector('title');
TitleChange.innerText='manikanta';
