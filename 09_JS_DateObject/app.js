//date object
let date = new Date();
console.log(date);

//proper date
let current = new Date().toLocaleDateString();
console.log(current);


//proper time
let currentTime = new Date().toLocaleTimeString();
console.log(currentTime);

//USA time
let optios = {timeZone : 'America/New_York'};
let usa = new Date().toLocaleTimeString('en-US',optios);
console.log(usa);

//today
let today = new Date().getDay();
console.log(today);

//month
let month = new Date().getMonth();
current = '';
switch (month) {
    case 0:
        current = 'january';
        break;
    case 1:
        current = 'february';
        break;
    case 2:
        current = 'march';
        break;
    case 3:
        current = 'april';
        break;
    case 4:
        current = 'may';
        break;
    case 5:
        current = 'june';
        break;
    case 6:
        current = 'july';
        break;
    case 7:
        current = 'august';
        break;
    case 8:
        current = 'september';
        break;
    case 9:
        current = 'october';
        break;
    case 10:
        current = 'november';
        break;
    case 11:
        current = 'december';
        break;

    default:
        current = 'enter correct month'
        break;
}
console.log(`this month is ${current}`);


//custom date
let customDate = new Date().getDate();
let custMonth = new Date().getMonth();
let customYear = new Date().getFullYear();

console.log(`${customDate} - ${custMonth+1} - ${customYear}`);