function isFibonacciNumber(num) {
    let a = 0;
    let b = 1;

    if (num === 0 || num === 1) {
        return true;
    }

    while (b <= num) {
        if (b === num) {
            return true;
        }
        let next = a + b;
        a = b;
        b = next;
    }

    return false;
}

const num = 4;

if (isFibonacciNumber(num)) {
    console.log(`${num} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${num} não pertence à sequência de Fibonacci.`);
}
