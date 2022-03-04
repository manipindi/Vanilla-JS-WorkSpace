let a =10;
a = 20;
console.log(a);

let greet = () => {
    let msg = 'Good Morning';
    console.log(msg);
};
greet();

greet = () => {
    let msg = 'Good Evening';
    return msg;
};
let res = greet();
console.log(res);