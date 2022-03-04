//conditions & loops

//if - else
let time = 22;
let message;
if (time<=12) {
    message='good morning';
}
else if (time>12 && time<=17) {
    message='good afternoon';
}
else if (time>17 && time<=23) {
    message = 'good evening';
}
else{
    message='enter a proper time';
}
console.log(message);


//switch
let day = new Date().getDay();
console.log(day);
let today;

switch (day) {
    case 0:
        today = 'sunday';
        break;
    case 1:
        today = 'monday';
        break;
    case 2:
        today = 'tuesday';
        break;
    case 3:
        today = 'wednesday';
        break;
    case 4:
        today = 'thursday';
        break;
    case 5:
        today = 'friday';
        break;
    case 6:
        today = 'saturday';
        break;
    default:
        today = 'enter proper date'
        break;
}
console.log(`today is : ${today}`);



//for loop 
let i;
let result='';
for(i=0; i<=10; i++){
    if (i <= 9) {
        result += `${i} , ` ;
    }
    else{
        result += `${i}` ;
    }
}
console.log(result);


result = '';
for(i=20; i>=0; i-=2){
    if(i>0){
        result +=`${i} , `;
    }
    else{
        result +=`${i}`;
    }
}
console.log(result);


//nested for loop
let num = 5;
let res='';

for(i=1; i<=num; i++){
    for(j=1; j<=i; j++){
        res += `* `;
    }
    res += `\n`;
}
console.log(res);

/* 
1
12
123
1234
12345
*/
num = 5;
res='';

for(i=1; i<=num; i++){
    for(j=1; j<=i; j++){
        res += `${j} `;
    }
    res += `\n`;
}
console.log(res);




/*
1
22
333
4444
55555
*/
num = 5;
res='';

for(i=1; i<=num; i++){
    for(j=1; j<=i; j++){
        res += `${i} `;
    }
    res += `\n`;
}
console.log(res);


/*
12345
1234
123
12
1
*/

res='';
for(let i=5; i>=1; i--){
    for(let j=1; j<=i; j++){
        res += `${j} `
    }
    res += `\n`
}
console.log(res);


/*
55555
4444
333
22
1
*/

res='';
for(i=5; i>=1; i--){
    for(j=1; j<=i; j++){
        res += `${i}`
    }
    res += `\n`;
}
console.log(res);

