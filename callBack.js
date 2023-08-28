// when a funtion is passed as the argument to the other funtion 
function a(a,b,print){
    let c=a+b;
    print(c);
}
function print(e){
    console.log(e);
}
a(1,2,print)


// asynchronous programming

function fetchData(callback) {
    setTimeout(function() {
        const data = 'Some data retrieved from an API';
        callback(data);
    }, 2000);
}
function callback(data) {
    console.log('Processing the data:', data);
}

fetchData(callback);


// const numbers = [1, 2, 3, 4];
// numbers.forEach((num) =>{
//     return num+1;
// });

// console.log(num);