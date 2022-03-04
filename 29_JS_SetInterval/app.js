let count = 0;
let interval = 3;
let greet = () => {
    count++;
    console.log(`Hello Welcome to My Example : ${count}`);
    
};
//greet();
interval = setInterval(greet,1000);

setTimeout(() =>{
    clearInterval(interval);
    console.log('function stopped');
} ,5000);