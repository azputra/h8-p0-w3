function pasanganTerbesar(num) {
    // you can only write your code here!
    let result = 0;
    const strNum = num.toString();
    for (let i = 0; i < strNum.length; i++) {
        const check = strNum[i] + strNum[i+1]
        if (check > result){
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