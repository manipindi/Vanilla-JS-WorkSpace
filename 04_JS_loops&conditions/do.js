/*print 0 to 10 using do while loop */

let res='';
let i = 0;
do{
    res += `${i} `;
    i++;
}
while(i<=10);
console.log(res);


/*print 
55555
4444
333
22
1
*/

res='';
i=5;
do{
    let j=1;
    do{
        res += `${j} `;
        j++;
    }
    while(j<=i)
    res += `\n`;
    i--;
}    
while(i>=1);
console.log(res);
