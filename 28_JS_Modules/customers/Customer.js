import {Person} from '../persons/Person.js'

export class Customer extends Person{
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