function armstrom(nums) {
    const num1=nums;
    let sum=0;
    while(nums!==0){
        let last=nums%10;
        sum +=last*last*last;
        nums = Math.floor(nums / 10);
    }
    if(num1===sum){
        console.log("yes");
    }
    else{
        console.log("no");
    }
}
armstrom(375)