function prime(n) {
    let flag = true;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            flag = false;
            break;
        }
    }
    if (flag) {
        console.log("prime");
    } else {
        console.log("not a prime number");
    }
}

prime(7);
