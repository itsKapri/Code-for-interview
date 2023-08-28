function perfect(num1){
    let sum=0;
    for(let i=0;i<num1;i++){
        if(num1%i==0){
            sum=sum+i;
        }
    }
    if(sum==num1){
        console.log("perfect");
    }else{
        console.log("not");
    }
}
perfect(6)