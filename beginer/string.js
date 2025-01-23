// string  
const name = "arjun "
const repo = 50 
console.log(name + repo  + " funtastic")

// String interpolation
// it is the best way to include the variable in the string 

console.log(`My name is ${name} and my number of repo is sthe ${repo} `); //(`)this sign is found in belo esc and above tab key

// another way to decleare the string 
// this will create a such envaronment from which many function like charat lowercase can be accessed

const gameName = new String('sumbhai-873-done');
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('a'));


// the use of such more functions of strings 
// visit mdn for the detail research and knowledge


// substring is used to divide the string as we want but here the cutting of string from back is not possible
const newString = gameName.substring(0,4)
console.log(newString)

// slice is also used to cut the string from desired place but we can also cut from the back side
const check = new String("arjun the boss")
const anotherString = check.slice(4)
console.log(anotherString)

// by using the split feature of string we can split the string into array 
console.log(check.split(" "))