// string  
const name = "arjun "
const repo = 50 
console.log(name + repo  + " funtastic")

// String interpolation
// it is the best way to include the variable in the string 

console.log(`My name is ${name} and my number of repo is sthe ${repo} `); //(`)this sign is found in belo esc and above tab key

// another way to decleare the string 
// this will create a such envaronment from which many function like charat lowercase can be accessed

const gameName = new String('sumbhai');
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('a'));

