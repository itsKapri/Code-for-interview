function add(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}
const ans=add(1)(2)(3);
console.log(ans);