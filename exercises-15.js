function groupAnimals(animals) {
    // you can only write your code here!
    const result = [];
    const abjad = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    for (let i = 0; i < abjad.length; i++) {
        let checkArr = [];
        // console.log(animals[i])
        for (let j = 0; j < animals.length; j++) {
            // console.log(abjad[i])
            if (abjad[i] === animals[j][0]) {
                checkArr.push(animals[j]) 
            }
        }
        if (checkArr.length > 0) {
            result.push(checkArr)
        }
    }
    return result
  }

////Latihan dari kak Icha
// function groupAnimals2(animals) {
//     var result = [];

//     for (let i = 0; i < animals.length; i++) {
//         if (result.length === 0) {
//             result.push([animals[i]])
//         } else {
//             var check = false
//             for (let j = 0; j < result.length; j++) {
//                 if (animals[i][0] === result[j][0][0]) {
//                     check = true
//                     result[j].push(animals[i])
//                 }           
//             }
//             if (check === false) {
//                 result.push([animals[i]])
//                 // console.log(result);
//             }
//         }
//     }
//     return result
// }

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
//   [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]