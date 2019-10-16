function hitungJumlahKata(kalimat) {
    // you can only write your code here!
    var arr = [];
    var str = "";
    for (var i = 0; i < kalimat.length; i++) {
        if (kalimat.length - 1 === i && kalimat[i] !== " ") {
            arr.push(str)
            str = ""
        } else if (kalimat[i] !== " " && kalimat[i + 1] === " ") {
            arr.push(str)
            str = ""
        } else {
            str += kalimat[i]
        }
    }
    return arr.length
}

// TEST CASES
console.log(hitungJumlahKata('          I     have  a  dream       ')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5