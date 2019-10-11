function hitungJumlahKata(kalimat) {
    // you can only write your code here!
    var arr = [];
    var str = "";
    var newKalimat = kalimat.trim()
    for (var i = 0; i < newKalimat.length; i++) {
        if (newKalimat[i] !== " ") {
            str += newKalimat[i];
        }
        if (newKalimat[i] === " ") {
            arr.push(str);
            str = "";
        }
    }
    arr.push(str);
    return arr.length
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5