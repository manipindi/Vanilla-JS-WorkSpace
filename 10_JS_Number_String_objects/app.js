//Number

//max
console.log(Number.MAX_SAFE_INTEGER);

//min
console.log(Number.MIN_SAFE_INTEGER);

//positve infinity

console.log(Number.POSITIVE_INFINITY);

//negative
console.log(Number.NEGATIVE_INFINITY);

//parse Int
let str = '100';
let num1 = Number.parseInt(str)
console.log(`${typeof str} => ${typeof num1}`);

//toString

let num2 = 100;
let str1 = num2.toString();
console.log(typeof str1);

let amt = 500;
console.log(amt.toFixed(2));



//String operations
let msg = String('Good morning');
console.log(msg.length);

//lowercase
console.log(msg.toLowerCase());

//uppercase
console.log(msg.toUpperCase());

//sub string
console.log(msg.substr(5,7));


//charAt
console.log(msg.charAt(5));


//JSON object
//string => object : parse()
//object => stringify()

let student = {
    name : 'mani',
    age :20,
    course : 'cse'
};
console.log(student);

let stu = JSON.stringify(student);
console.log(stu);

//string to obbject
let stri = JSON.parse(stu);
console.log(stri);