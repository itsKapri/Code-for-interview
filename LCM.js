function lcm(num1, num2) {
    let max;
    if (num1 > num2) {
        max = num1;
    } else {
        max = num2;
    }
    while (true) {
        if (max % num1 === 0 && max % num2 === 0) {
            return max;
        }
        max += max;
    }
}
const num1 = 12;
const num2 = 8;
const ans = lcm(num1, num2);
console.log(ans);
