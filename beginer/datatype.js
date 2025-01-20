// primitive data types
// 7 types: number, bollean, string, symbol,bigint,null ,undefine

let namee = "arjun"
let emailecheck = true
let age = 18
let telno =97844093024248n
let progress = null
let service =undefined
const id=Symbol('421')
const anotherid=Symbol('421')
console.log(id === anotherid)

console.table([typeof namee, typeof emailecheck,typeof age,typeof progress,typeof service,typeof anotherid,typeof telno]);
// reference (non primitive)
// type: array ,object , function
// array
const heros = ["rajeshamal","Nikhil upreti"]
console.log(heros)
// object
let obj = {
    name :"arjun",
    age:18,

}

// function

let myfunction = function(){
    console.log("hello world")

}
console.table([typeof myfunction,typeof obj,typeof heros])


let check =[ 
{value:namee, type:typeof namee},
{value:age,type:typeof age}
];
console.table(check)
//jai hos
console.log("har har mahadev")