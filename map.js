const arr=[1,2,3,4];
console.log(arr);

arr.forEach(e => e+1);
console.log(arr);

arr.forEach((e, index, array) => array[index] = e + 1);
console.log(arr);


const arr3=arr.map(e => {
    return e+1;
});
console.log(arr3);


const filter=arr.filter((e)=>{
    return e>3;
})

console.log(filter);


const reduce=arr.reduce((accumulator, currentValue) => {
     console.log(accumulator + currentValue);
     return accumulator + currentValue;
  }, 0.5);

console.log(reduce);