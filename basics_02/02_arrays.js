const nepali_heros = ["rajesh","nikhil","biraj"]
const indian_heros = ["ritik","amita","saru"]
// in this method the array in pushed as one data element 
// nepali_heros.push(indian_heros)

// after doing pus to get amita we nedd to do like this which is not a goo way of emerging or addinga value
// console.log(nepali_heros[3][1])

// better to use concat or spread ...spread is more in use

// concat (this will add all array element togther)
// const allHeros = nepali_heros.concat(indian_heros)
// console.log("concat effect",allHeros);

// spread in means just like breaking of glass i.e spreading of array into single single element ,, in this no limitation of adding values
const all_new_heros = [...nepali_heros, ...indian_heros]
console.log("spread : ",all_new_heros);

// to solve pobalmatic situtation where there is array in side array and again inside array there is another array

