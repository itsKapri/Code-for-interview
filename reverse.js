const rev = (nums) => {
    let rev = 0;
    while (nums !== 0) {
        let last = nums % 10;
        rev = rev * 10 + last;
        nums = Math.floor(nums / 10);
    }
    return rev;
}
const ans = rev(371);
console.log(ans);
