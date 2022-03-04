// Template string (`)
let mobile = {
    brand : 'apple',
    color : 'black',
    price : 10000
};

let msg = "Brand: "+mobile.brand + " Color: "+mobile.color+ " Price: "+mobile.price;
console.log(msg);

let msg1 = `Brand: ${mobile.brand} Color: ${mobile.color} Price: ${mobile.price}`;
console.log(msg1);

let tem = document.querySelector('#lister');

tem = `<ul>
                <li>${mobile.brand}</li>
                <li>${mobile.color}</li>
                <li>${mobile.price}</li>
        </ul>`;


//optional parameters

let message = (name,age) =>{
    if(age === undefined){
        age = 21;
    }
    let msg = `Hello ${name} You are ${age} years old`;
    console.log(msg);
}
message('Mani');

//or
let message1 = (name,age=21) =>{
    let msg = `Hello ${name} You are ${age} years old`;
    console.log(msg);
}
message1('Mani');

//or

let printNum = (start,end=20) =>{
    let result = '';
    for(let i = start; i<=end; i++){
        result = result+`${i} `;
    }
    console.log(result);
};
printNum(2);

//arrow functions

let emp=[
    {
        id : 1,
        name : 'john',
        age : 40,
        designation : 'manager',
        isActive : true
    },
    {
        id : 2,
        name : 'wilson',
        age : 23,
        designation : 'employee',
        isActive : true
    },
    {
        id : 3,
        name : 'ramesh',
        age : 25,
        designation : 'team lead',
        isActive : false
    },
    {
        id : 4,
        name : 'mani',
        age : 36,
        designation : 'engineer',
        isActive : true
    }
];

let juniorEmp = emp.filter((employee) => {
    return employee.age<30;
});
console.log(juniorEmp);

//limitations of arrow functions
//object wont work for arrow functions 

let student = {
    firstname : 'mani',
    lastname : 'pindi',
    fullname : function() {
        return `${this.firstname} ${this.lastname}`;
    }
};
console.log(student.fullname());


//For of loops

let employ1=[
    {
        id : 1,
        name : 'john',
        age : 40,
        designation : 'manager',
        isActive : true
    },
    {
        id : 2,
        name : 'wilson',
        age : 23,
        designation : 'employee',
        isActive : true
    },
    {
        id : 3,
        name : 'ramesh',
        age : 25,
        designation : 'team lead',
        isActive : false
    },
    {
        id : 4,
        name : 'mani',
        age : 36,
        designation : 'engineer',
        isActive : true
    }
];

//normal for loop
let result = '';
for(i=0; i<=employ1.length-1; i++){
    let employee = employ1[i];
    result += `${employee.name} `;
    
}
console.log(result);

//for in loop
result = '';
for(let i in employ1){
    let employee = employ1[i];
    result += `${employee.name} `;
}
console.log(result);

//for of loop

result = '';
for(let employee of employ1){
    result += `${employee.name} `;
}
console.log(result);

//forEach function
result = '';
employ1.forEach(function(employee){
    result += `${employee.name} `;
});
console.log(result);

//forEach function in ES6
result = '';
employ1.forEach((employee) => {
    result += `${employee.name} `;
});
console.log(result);



//Destructuring ES6
student = {
    name : 'manikanta pindi',
    age : 21,
    course : 'cse',
    address : {
        city : 'malkipuram',
        district : 'east godavari',
        state : 'AP'
    } ,
    hobbies : {
        regular : {
            id : 1,
            regHobbies : ['Reading Books', 'Programming JS']
        },
        occasional : {
            id_1 : 1,
            ocasionalHobbies : ['Parties', 'Gamming']
        }
    }
};

//Destructuring
let {city, district, state} = student.address;
console.log(`CITY: ${city}  DISTRICT: ${district}  STATE: ${state}`);

let {id, regHobbies} = student.hobbies.regular;
console.log(`ID: ${id}  REGULAR HOBBIES: ${regHobbies}`);
console.log(regHobbies);

let {ocasionalHobbies} = student.hobbies.occasional;
console.log(`${ocasionalHobbies}`);



//spread operator
let array1 = [10,21,13,24,982,293,203,12,1241,3];
let min = Math.min(...array1);
let len = array1.length
console.log(min);
console.log(len);


let array2 = ['red','blue','green', 'white'];
let array3 = ['violet','sky','navy'];
/*let colors = [];
for(let color of array2){
    colors.push(color);
}
for(let color1 of array3){
    colors.push(color1);
}
console.log(colors);*/

let colors = [...array2, ...array3];
console.log(colors);

