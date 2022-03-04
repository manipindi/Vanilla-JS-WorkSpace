let mobile = {
    Brand : 'Apple',
    Price : 30000,
    Color : 'Grey'
};
console.log(mobile);


class Mobile{
    constructor(brand,price,color){
        this.color = color;
        this.price = price;
        this.brand = brand;
    }

    getBrand(){
        return this.brand;
    }

    getPrice(){
        return this.price;
    }

    getColor(){
        return this.color;
    }

    prineProp(){
        let spec = `Brand: ${this.brand}  Price: ${this.price}  Color: ${this.color}`;
        console.log(spec);
    }
}
let mobile1 = new Mobile('Apple', 35000, 'Black');
mobile1.prineProp();