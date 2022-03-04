//creation of array

let arra=[10,20,30];
console.log(arra);

//access array elements
console.log(arra[1]);

//iteration of array elements
let color = ['white','silver','purple','red'];

//using for loop
let res='';
for(let i=0; i<=color.length-1; i++){
    res += `${color[i]} `;
}
console.log(res);


// using for-in loop from ES6
res='';
for(let index in color){
    res += `${color[index]} `;
}
console.log(res);

// using for-of loop from ES6
res='';
for(let col of color){
    res += `${col} `;
}
console.log(res);


//array of objects
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
        age : 43,
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

//access all employees
console.log(emp[0].name);

//iterate emp
res='';
for(let employ of emp){
    res += `${employ.name} `;
}
console.log(res);

//filter age<=30
let junEmp = [];
for(let employ of emp){
    if(employ.age<=30){
        junEmp.push(employ);
    }
}
console.log(junEmp);

//filter isActive true
let act=[];
for(let active of emp){
    if(active.isActive===true){
        act.push(active);
    }
}
console.log(act);


//functions of arrays
//shift()-> remove first element of array

console.log('________shift()___________');

let fruits = ['mango','apple','papaya','orange','grapes'];
console.log(fruits);
fruits.shift();
console.log(fruits);

//unshift() => add first element to array 

console.log('________shift()___________');

fruits = ['mango','apple','papaya','orange','grapes'];
console.log(fruits);
fruits.unshift('banana');
console.log(fruits);

//push( => adds to last)

console.log('________push()___________');

fruits = ['mango','apple','papaya','orange','grapes'];
console.log(fruits);
fruits.push('banana');
console.log(fruits);

console.log('________pop()___________');

fruits = ['mango','apple','papaya','orange','grapes'];
console.log(fruits);
fruits.pop('banana');
console.log(fruits);

console.log('________sort()___________');

fruits = ['mango','apple','papaya','orange','grapes'];
console.log(fruits);
fruits.sort();
console.log(fruits);

console.log('________reverse()___________');

fruits = ['mango','apple','papaya','orange','grapes'];
console.log(fruits);
fruits.reverse();
console.log(fruits);

//reverse order
console.log('________reverse() order___________');

fruits = ['mango','apple','papaya','orange','grapes'];
console.log(fruits);
fruits.sort().reverse();;
console.log(fruits);


//splice of (index,no of elements)=>removes all elements from given index
console.log('________splice(index)___________');

fruits = ['mango','apple','papaya','orange','grapes'];
console.log(fruits);
fruits.splice(2,2);
console.log(fruits);

//splice of (index,replace element)=>replaces given element at given index
console.log('________splice(index)___________');

fruits = ['mango','apple','papaya','orange','grapes'];
console.log(fruits);
fruits.splice(2,1,'sapota');
console.log(fruits);

//filter age<=30 using filter()
junEmp = [];
for(let employ of emp){
    if(employ.age<=30){
        junEmp.push(employ);
    }
}
console.log(junEmp);

let jrEmp = emp.filter(function(employe){
    return employe.age<=30;
});
console.log(jrEmp);


//filter isActive true
act=[];
for(let active of emp){
    if(active.isActive===true){
        act.push(active);
    }
}
console.log(act);

let actEmp =  emp.filter(function(employe){
    return employe.isActive;
});
console.log(actEmp);