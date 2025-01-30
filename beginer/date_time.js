// let mydate =new Date()
// console.log(mydate)
// console.log(mydate.toString())
// console.log(mydate.toDateString())
// console.log(typeof mydate)

 let myCreatedDate = new Date(2024, 01,16)
// console.log(myCreatedDate.toDateString())

// for printing the current date and time
// let timestamp =  Date.now();
// console.log(Date(timestamp))
// console.log(myCreatedDate.toLocaleTimeString())

// date
let new_date = new Date()
// console.log(new_date);

// console.log(new_date.getMonth()+1)
console.log(`${new_date.toLocaleString('default',{
    weekday: "long"
})} is the todays date`)
// console.log(new_date.toLocaleString('default',{
    // weekday: "long", }))