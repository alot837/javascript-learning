// in this I will be using some features of number
let score = new Number(8848);
console.log(score)

// now for the poin value to the accurate /pression value
let height = new Number(8848.423)
console.log(height.toString().length)

console.log(height.toFixed(2))

// topresicision < this function help to get round of value
console.log(height.toPrecision(4))

// represents the numbers in commas for eg : 100,000,000 
const paisa = 900000000
console.log(paisa.toLocaleString('ne-IN'))

// max value and min value
let max = Number.MAX_VALUE;
console.log (max)

// +++++++++++++++++++++++++++++++++++++++++ MATHS +++++++++++++++++++++++++++++
console.log(Math.PI);

//absolute value
// all -ve value are changet to +ve but not vice versa
// console.log(Math.abs(-10));

// console.log(Math.round(4.33));
// ceil always pick highest value if littel bit is also more 
// console.log(Math.ceil(4.2));
// floor will take the lower value
// console.log(Math.floor(4.9)); 

// there are many more function 
// for minimim value
// console.log(Math.max(4,3,2,1,5));


// Math.random use of Math function 
console.log(Math.random().toPrecision(3));
console.log(Math.floor((Math.random()*10) + 1));
// put the desired numbe in the mini and amxi to get the between value
const mini = 10;
const maxi = 20;
console.log(Math.floor(Math.random()*( maxi - mini +1) + mini))