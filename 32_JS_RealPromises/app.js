let employees = [{id : 1, name : 'mani' , age : 21},
                {id : 2, name : 'surya', age : 20 }];


let createEmployee = (employee) => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            employees.push(employee);
            let isDone = true;
            if (isDone) {
                resolve(); 
            }
            else{
                reject('Something went wrong, creation failed');
            }
        }, 1000);
    } );
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

/*createEmployee({id:3, name:'prasad', age:23}).then( () => {
    getEmployee();
}).catch( (err) => {
    console.error(err);
});*/


//Async and Await

let init = async () => {
    let result = await createEmployee({id: 3, name:'prasad', age:25});
    getEmployee();
};
init();

