export class Person{
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