//print values from 0 to 10

/*
let i=0;
let res='';
while(i<=10){
    res += `${i} `;
    i++
}
console.log(res);

//print values from 20 to 0

res='';
i = 20;
while(i>=0){
    res += `${i} `;
    i -= 2;
}
console.log(res);


//print stars upto 5

num=5;
res='';
while(i<=num){
    let j = 1;
    while(j<=i){
        res += `* `;
        j++;
    }
    res += `\n`;
    i++;
}
console.log(res);


num=5;
res='';
while(num>=1){
    let j=1;
    while(j<=num){
        res += `${j} `;
        j++;
    }
    res += '\n';
    i--;
}
console.log(res);


print 
55555
4444
333
22
1
*/
let i=5;
let res='';
while(i>=1){
    let j=1;
    while(j<=i){
        res += `${i}`;
        j++;
    }
    res += `\n`;
    i--;
} 
console.log(res);