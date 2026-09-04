function maximumSwap(num) {
    let digits = String(num).split("");

    let last = {};

    for (let i = 0; i < digits.length; i++) {
        last[digits[i]] = i;
    }

    for (let i = 0; i < digits.length; i++) {
        for (let d = 9; d > digits[i]; d--) {
            if (last[d] > i) {
                let temp = digits[i];
                digits[i] = digits[last[d]];
                digits[last[d]] = temp;

                return Number(digits.join(""));
            }
        }
    }

    return num;
}

console.log(maximumSwap(2736));
console.log(maximumSwap(9973)); 
console.log(maximumSwap(98368));