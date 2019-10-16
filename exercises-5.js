function palindrome(kata) {
    // you can only write your code here!
    let checkKata = "";
    for (let j = kata.length - 1; j >= 0; j--) {
        checkKata += kata[j];
    }
    return kata === checkKata;
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false    