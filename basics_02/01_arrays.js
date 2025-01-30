// arrays
// [1,2,true,0] these are the elements on array and they can be mixed dataype and there may b e array inside array
const myArray = [1,2,true,0];
console.log(myArray[0]);
// note: array make shallow copies (whose properties share the same refference point)
// array can be decleare by other ways also
const myHeros = ["Rajeshamal","Nikhil"]
const myarr2 = new Array(3,4,5,6,7)
// pointed to be notted in arrays we can see prototype also
console.log(myHeros[1])


// Array methods
myArray.push(6)  //this will add the one more value on the array
console.log(myArray);
// toremove last value of array use pop
myArray.pop()
console.log(myArray)

// to add at first use .unshift but is is noe so much important because , this will change all other array position
myArray.unshift("hara hara")
console.log(myArray)
// use shift to delete the first value


// includes and indexof
console.log(myArray.includes(4))
console.log(myArray.indexOf(0))

// to join and change typeof into string use . join
const newArray = myArray.join();
console.log(myArray)
console.log(newArray)
console.log(typeof newArray)

// slice , splice