//JS objects

let camera={
    brand : 'canon',
    price : 30000,
    color : 'black',
    mfg : 2019
};
console.log(camera);

//access properties of objects
console.log(camera.brand);

//access non existing property
console.log(camera.megaPixel);

//access properties using dot and [] notation
console.log(camera.price);
console.log(camera['price']);

//for dynamic properties dot, []notation
let prop='brand';
console.log(camera.prop);
console.log(camera[prop]);

//nested object
let student = {
    name : 'reddy',
    age : 23,
    address : {
        street : 'malkipuram',
        city : 'razole'
    }
};

//access nested object
console.log(student.address);

//access properties of objects
console.log(student.address.street);

//crud operations
//create operation
let mobile = {};

mobile.brand='apple';
mobile.color='gray';
mobile.price=40000;
console.log(mobile);

//read operation
console.log(mobile.brand);

//update operation
console.log(mobile.price);
mobile.price=50000;
console.log(mobile.price);

//delete operation
delete mobile.brand;
console.log(mobile);