let obj = {
    name : 'mani',
    branch : 'cse'
};

let arr = ['mani','cse',21];



let str = [
    {
        name : 'mani',
        branch : 'cse',
        isEmployee : true
    },
    {
        name : 'jeevan',
        branch : 'mech',
        isEmployee : false
    },
    {
        name : 'jeevan',
        branch : 'mech',
        isEmployee : true
    }
];

let arr1 = [];


for(let i= 0; i<str.length; i++){
    if(str[i].isEmployee === true){
        console.log(str[i]);
    }
}