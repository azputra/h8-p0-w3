function angkaPalindrome(num) {
    // you can only write your code here!
    while (true) {
        num++
        let strNum = num.toString()
        // console.log(strNum)
        let temp = "";
        for (let i = 0; i < strNum.length; i++) {
            temp = strNum[i] + temp
        } if (strNum === temp) {
            return Number(strNum)
        }
    }
  }
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001