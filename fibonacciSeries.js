function fibonacci(num1) {
    let t1 = 0;
    let t2 = 1;
    let i = 0;
    while (i < num1) {
        console.log(t1);
        let t3 = t1 + t2;
        t1 = t2;
        t2 = t3;
        i++;
    }
}

fibonacci(10);
