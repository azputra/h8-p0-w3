function targetTerdekat(arr) {
    // you can only write your code here!
    var posisiO;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'o') {
            posisiO = i
            // console.log(countO)
        }
    }
    var posisiX = [];
    for (let j = 0; j < arr.length; j++) {
        if(arr[j] === "x"){
            posisiX.push(j)
            // console.log(posisiX)
        }
    }
    var targetDekat = 0;
    for (let k = 0; k < posisiX.length; k++) {
        var positifNum = (Math.abs(posisiO-posisiX[k]))
        if (targetDekat === 0) {
            targetDekat = positifNum
        } else if (targetDekat > positifNum) {
            targetDekat = positifNum
        }
    }
    return targetDekat
}
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2