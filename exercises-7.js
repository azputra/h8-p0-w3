function hitungJumlahKata(kalimat) {
    // you can only write your code here!
    var arr = [];
    var str = "";
    for (var i = 0; i < kalimat.length - 1; i++) {
        if (kalimat[i] !== " ") {
            str += kalimat[i];
        }
        if (kalimat[i] === " " && str.length >= 1) {
            arr.push(str);
            str = "";
        }
    }
    arr.push(str);
    return arr.length
}

// TEST CASES
console.log(hitungJumlahKata(' I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5