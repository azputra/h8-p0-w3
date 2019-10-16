function pasanganTerbesar(num) {
    // you can only write your code here!
    let result = '';
    const strNum = num.toString();
    for (let i = 0; i < strNum.length; i++) {
        const check = strNum[i] + strNum[i + 1]
        console.log(typeof check)
        console.log(typeof result)
        if (check > result) {
            result = check
        }
    }
    return Number(result)
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99