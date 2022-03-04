/*console.log('car 1');
console.log('car 2');
setTimeout( () => {
    console.log('car 3');
}, 3000);
console.log('car 4');
console.log('car 5');*/

//callback funtions
/*
let sum = (a,b) => {
    return a + b;
};

let mul = (a,b) => {
    return a*b;
};

let calculate  = (a, b, callback) => {
    let res = '';
    return callback(a,b); //sum(a, b);
};
let output = calculate(20, 10, sum);
console.log(output);

output = calculate(20, 10, mul);
console.log(output);

output = calculate(10, 20, (a, b) => {
    return a-b;
});
console.log(output);
*/


let employees = [
    {
        id : 1,
        name : 'mani',
        age : 25
    },
    {
        id : 2,
        name : 'bhanu',
        age : 21
    }
];

let createEmp = (employee,callback) => {
    setTimeout(() => {
        employees.push(employee)
        callback();
    }, 2000);
};

let getEmployee = () => {
    setTimeout(() => {
        let employrow = '';
        employees.forEach((employee) => {
            employrow += `<tr>
                            <td>${employee.id}</td>
                            <td>${employee.name}</td>
                            <td>${employee.age}</td>
                        </tr>`;
        });
        document.querySelector('#table-body').innerHTML = employrow;
    }, 1000);
};

createEmp({id : 3, name: 'jeevan', age: 30}, getEmployee);