function palindrome(kata) {
    // you can only write your code here!
    let realKata = "";
    let checkKata = "";
    for (let i = 0; i < kata.length; i++) {
        realKata += kata[i];
    }
    for (let j = kata.length - 1; j >= 0; j--) {
        checkKata += kata[j];
    }
    return realKata === checkKata;
}
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false