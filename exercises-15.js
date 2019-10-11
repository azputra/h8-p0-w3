function groupAnimals(animals) {
    // you can only write your code here!
    const result = [];
    const abjad = 'abcdefghijklmnopqrstuvwxyz';
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

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
//   [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]