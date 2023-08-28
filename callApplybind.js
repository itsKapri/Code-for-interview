let obj={
    firtName:"nilesh",
    lastName:"kapri",
    age:20,
    print:function (batch,branch){
        console.log (this.firtName +" "+ this.lastName+" "+ batch+" "+branch);
    }
}
obj.print()
let obj2={
    firtName:"chetan",
    lastName:"divekar",
    age:20,
}
obj.print.call(obj2);


// apply

obj.print.apply(obj2,["23","comp"])


// bind

let printbind=obj.print.bind(obj2,"23","comp");

console.log("--",printbind());

printbind()

// (function nilesh(){
//     console.log("nilesh");
// })()


// function new1(a){
//     return function new2(b){
//         return function new3(c){
//             console.log(a+b+c);
//         }
//     }
// }

// new1(1)(2)(3)


