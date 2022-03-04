//JS Operators
//assignment : =
//arithmetic :+ - * / %
//short hand math : += -= *= /=
//conditional operators : <  >  <= >= !==
//unary operators : ++, --
//logical operator : &&  ||  ^
//ternary operator : ?:
//equality operatoe : ==  ===

//assignment : =
let test = 10;
console.log(test);

//arithmetic :+ - * / %
let num1 = 10;
let num2 = 20;
console.log(`sum: ${num1+num2}`);
 

//unary operators : ++, --

let x = 10;
x=x+1;
x--;
console.log(x);

//logical operator : &&  ||  ^

let relation = true;
let parentsagreed = false;
if(relation && parentsagreed){
    console.log('get marry soon');
}
else{
    console.log('wait until parents agreement');
}

//ternary operator : ?:
//(conditoion)? true : false;
/* let m =35;
if (m<=74) {
    console.log('You failed the exam');
}
else{
    console.log('you cleared the exam');
} */

let marks = 65;
let message;
(marks <= 35) ? message='you failed the exam' : message='You passed the exam';
console.log(message);

//equality operatoe : ==  ===

marks = 10;
marks1 = '10';
if (marks===marks1) {
    console.log('both are equal');
}
else{
    console.log('both are unequal');
}