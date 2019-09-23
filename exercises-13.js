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
    var targetDekat = []
    for (let k = 0; k < posisiX.length; k++) {
        targetDekat.push(Math.abs(posisiO-posisiX[k]))
        // console.log(targetDekat)
    }
    var tempTerdekat = targetDekat[0]
    // console.log(targetDekat)
    if (targetDekat.length === 0) {
        return 0
    } else {
        for (let l = 0; l < targetDekat.length; l++) {
            if (tempTerdekat > targetDekat[l]) {
                tempTerdekat = targetDekat[l]
            }
        } // console.log(tempTerdekat)
    } 
    return tempTerdekat
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2