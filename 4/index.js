// module.exports 
const tele = (amount, costsArray) => {
    let combos = [];

    if (costsArray.length < 1 || amount === 0 || !costsArray.find(element => element < amount)) {
        return "";
    }

    const combinationSum = (candidates, target, combos, currCombo, index) => {

        if (target === 0 || (target - candidates[index] < 0)) combos.push([...currCombo]);

        if (target < 0) return; 
      
        for (let i = index; i < candidates.length; i++) {

          if (candidates[i] <= target) {

            currCombo.push(indexFinder(candidates, candidates[i], i) + 1)
                // candidates.indexOf(candidates[i]) + 1);

            combinationSum(candidates, target - candidates[i], combos, currCombo, i);

            currCombo.pop();
          }
        }
    }

    const indexFinder = (costsArray, value, startIndex) => {
        let trueIndex = startIndex;
        for (let i = costsArray.length; i > 0; i--) {
            if (costsArray[i] === value && trueIndex < i) {
                trueIndex = i;
            }
        }
        return trueIndex;
    }

    const calcDiff = (a, b) => {
        // Whit Set I remove duplicates from strings
        return new Set(a).size - new Set(b).size
    }

    combinationSum(costsArray, amount, combos, [], 0);

    for (let i = 0; i < combos.length; i++) {
        combos[i] = combos[i].sort().reverse();   
    }

    let lenArray = 

    let maxLen = Math.max(...combos.length);
    
    let result = '';
    
    for (let i = 0; i < combos.length; i++) {
        for (let y = i + 1; y < combos.length; y++) {
            let diff = calcDiff(combos[i], combos[y]);
            if (diff > 0) {
                result = Number(combos[i].join(''));
            } else
            if (diff < 0) {
                result = Number(combos[y].join(''));
            }
        }
    }
    // Math.max(...combos).toString();

    return result;
}

// console.log(tele(7, [4, 5, 5, 5, 5, 5, 5, 5, 5])); //"9"
// console.log(tele(2, [5,4,3,2,1,2,3,4,5])); //"55"
// console.log(tele(0, [1,1,1,1,1,1,1,1,1])); // ""
// console.log(tele(2,[9,11,1,12,5,8,9,10,6])); // "33"
console.log(tele(20, [21, 3, 13, 3, 17, 3, 3, 4, 5])); // "977777"
console.log(tele(5,[5,4,3,2,1,2,3,4,5])); // "55555"

// let combinationSum = (candidates, target) => {
//     var buffer = [];
//     var result = [];
//     search(0, target);
//     return result;
    
//     function search(startIdx, target) {
//       if (target === 0) return result.push(buffer.slice());
//       if (target < 0) return;
//       if (startIdx === candidates.length) return;
//       buffer.push(candidates.indexOf(candidates[startIdx]) + 1);
//       search(startIdx, target - candidates[startIdx]);
//       buffer.pop();
//       search(startIdx + 1, target);
//     }
// }

 // arr = combinationSum(costsArray, money);