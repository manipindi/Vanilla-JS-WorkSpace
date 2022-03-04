//1. find th eno of o's in the given string

let message = 'good morning';
let findZero = (message) => {
    let count = 0;
    for (i = 0; i <= message.length - 1; i++) {
        let char = message.charAt(i);
        if (char === 'o' || char === 'O') {
            count++;
        }
    }
    return count;
};
console.log(`${findZero(message)}`);


message = 'manikantaa';
let findA = function (message) {
    let count = 0;
    for (i = 0; i <= message.length - 1; i++) {
        let ch = message.charAt(i);
        if (ch === 'a' || ch === 'A') {
            count += 1;
        }
    }
    return count;
};
console.log(`${findA(message)}`);



//find the reverse string 

message = 'good morning';
let reverse = (rev) => {
    let temp = '';
    for (i = rev.length - 1; i >= 0; i--) {
        let ch = rev.charAt(i)
        temp += ch;
    }
    return temp;
};
console.log(`${message} => ${reverse(message)}`);


//palindrome or not

let mesage = 'ABA';
let palindrom = (mesa) => {
    if (mesa === reverse(mesa)) {
        return true;
    }
    else {
        return false;
    }
};
console.log(`${palindrom(mesage)}`);


//triangle string one

let msg = 'mani pindi';
let triangleOne = (str) => {
    let temp = '';
    for (i = 1; i <= str.length; i++) {
        temp += `${str.substr(0, i)} \n`
    }
    return temp;
};
console.log(`${triangleOne(msg)}`);


//triangle string 2
let addspace = (number) => {
    let tempSpace = '';
    for (let i = 1; i <= number; i++) {
        tempSpace += ' ';
    }
    return tempSpace;
};

msg = 'Manikanta Pindi';
let triangleTwo = (str) => {
    let temp = '';
    for (let i = 0; i <= str.length - 1; i++) {
        temp += `${addspace(i)}${str.substr(i)} \n`
    }
    return temp;
};
console.log(triangleTwo(msg));



//triangle three
msg = 'manikanta pindi';
let triangleThree = (str) => {
    let temp = '';
    for (i = str.length; i >= 1; i--) {
        temp += `${str.substr(0, i)} \n`;
    }
    return temp;
};
console.log(triangleThree(msg));


//triangle four

let msgs = 'manikanta pindi';
let triangleFour = (str) => {
    let temp = '';
    for (i = str.length - 1; i >= 0; i--) {
        temp += `${addspace(i)}${str.substr(i)} \n`;
    }
    return temp;
};
console.log(triangleFour(msgs));