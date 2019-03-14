let x,y,z;

x=10;
y = '10';
z=30;

console.log(`x is ${typeof x}`);

var newX = x++;
console.log(`newX is ${newX}`);
console.log(`x is ${x}`);

console.log(`x==y? ${x==y}`);
console.log(`x==nweX? ${x==newX}`);

let timeInMs = Date.now();
console.log(`timeInMs is ${timeInMs}`);

let year = new Date().getFullYear() - 1970;
console.log(`Year after 1970 is ${year}`);

let year1970 = new Date(1970, 1, 1, 0, 0, 0, 0);
let today = Date.now;
let milliSecDiff = today.getMilliseconds() - year1970.getMilliseconds();
console.log(`Time after 1970 ${milliSecDiff}`);
let dateDiff = new Date(milliSecDiff);
console.log(`Date after 1970 ${dateDiff}`);


