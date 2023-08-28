console.log("synchronous");
console.log("1");
console.log("2");
console.log("3");

console.log("asynchronous");
setTimeout(()=>{
    console.log("1")
},2000)

console.log("2");
console.log("3");
