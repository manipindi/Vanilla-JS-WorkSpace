function printNum(startNum,endNum) {
    let res = '';
    for(let i=startNum; i<=endNum; i++){
        res += `${i} `;
    }
    console.log(res);
}
printNum(20,50); //function call

//function without parameters
function greet(){
    console.log('good morning');
}
greet();

//funcion expression
let greetMe = function() {
    console.log('good afternoon');
};
greetMe();

//function with paranmeters
let wishMe = function(name,age){
    let message = `Hello ${name} You are ${age} yrs old`;
    console.log(message);
};
wishMe('mani',20);

//function with return type
let sum = function(a,b){
    let result = (a+b)*4;
    return result;
};
let out = sum(10,20);
console.log(out);


//complex functions

//function with object as parameter
let printObj = function(obje){
    console.log(obje);
};
printObj({name : 'mani', age : 20});

let mobile={
    brand : 'apple',
    color : 'silver',
    price : 40000
};
printObj(mobile);

//function with array as parameter
let printArray = function(arr){
    let res = '';
    for(let i in arr){
        res += `Index : ${i} => Value : ${arr[i]} \n`;
    }
    console.log(res);
};
printArray([10,20,30]);

let color = ['white','blue','green','black'];
printArray(color);


//function inside an object
let student = {
    firstName : 'mani',
    lastName : 'pindi',
    fullName : function(){
        return 'Mani Pindi';
    }
};
console.log(student.fullName());

let stu = {
    firstName : 'mani',
    lastName : 'pindi',
    fullName : function(){
        return `${this.firstName} ${this.lastName}`;
    }
};
console.log(stu.fullName());

//nested function
let outer = function(){
    console.log('This is outer function');
    let inner = function(){
        console.log('This is inner function');
    };
    inner();
};
outer();


//twisted function
let twist = function(){
    let name = 'maenii';
    let printStu = function(){
        let student = {
            name : 'mani',
            age : 20,
            course : 'CSE'
        };
        return student;
    };
    return printStu;
};
let innerfn = twist();
let studentObj = innerfn();
console.log(studentObj.name);


//prepare chicken curry eith functions
let glassBowl = function(rawChicken,masala){
    let marinate = `Mixing : (${rawChicken} + ${masala})`;
    return marinate;
};

let cookingBowl = function(marinate,water){
    //cooked logic
    let cooking =  `Cooking : (${marinate} + ${water})`;
    return cooking;
};

let eatingPlate = function(cooking,rice){
    let eating = `Eating : (${cooking} + ${rice})`;
    console.log(eating);
};

let rawChicken = '3kg chicken';
let masala = 'garlic,pepper,salt';
let marinate = glassBowl(rawChicken,masala);

let water = '1 ltr water';
let cooking = cookingBowl(marinate,water);

let rice='1kg rice';
eatingPlate(cooking,rice);

