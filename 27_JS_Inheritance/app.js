class Person{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFirst(){
        return this.firstName;
    }

    getLast(){
        return this.lastName;
    }
    
    greet(){
        let msg = `Welcome Mr. ${this.firstName} ${this.lastName}`;
        console.log(msg);
    }
}

class Employee extends Person{
    constructor(firstName,lastName,age,designation){
        super(firstName,lastName);
        this.age = age;
        this.designation = designation;
    }

    getAge(){
        return this.age;
    }

    getDesignation(){
        return this.designation;
    }

    greet(){
        let msg = `Hello Mr. ${this.getFirst()} ${this.getLast()}  AGE: ${this.age}  Designation: ${this.designation}`;
        console.log(msg);
    }
}

let employee = new Employee('Mani', 'Pindi', 30, 'JD');
employee.greet();

class Customer extends Person{
    constructor(firstName, lastName, age, location){
        super(firstName,lastName);
        this.age = age;
        this.location = location;
    }
    getAge(){
        return this.age;
    }
    getLocation(){
        return this.location;
    }

    greet(){
        let msg = `Hello Mr. ${this.getFirst()} ${this.getLast()}  Age: ${this.age} Location: ${this.location}`;
        console.log(msg);
    }
}

let customer= new Customer('Mani', 'Pindi', 30, 'Hyderabad');
customer.greet();