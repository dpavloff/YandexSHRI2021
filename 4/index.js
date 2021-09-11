module.exports = (amount, costsArray) => {
    let combos = [];

    if (costsArray.length < 1 || amount === 0 || !costsArray.find(element => element < amount)) {
        return "";
    }

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

    var combinationSum = function(candidates, target, combos, currCombo, index) {

        if (target === 0) combos.push([...currCombo]);

        if (target < 0) return;
      
        for (let i = index; i < candidates.length; i++) {

          if (candidates[i] <= target) {

            currCombo.push(candidates.indexOf(candidates[i]) + 1);

            combinationSum(candidates, target - candidates[i], combos, currCombo, i);

            currCombo.pop();
          }
        }
    }

    combinationSum(costsArray, amount, combos, [], 0);

    // arr = combinationSum(costsArray, money);

    for (let i = 0; i < combos.length; i++) {
        combos[i] = Number(combos[i].sort().reverse().join(''));   
    }
    
    let result = Math.max(...combos).toString();

    return result;
}

// console.log(tel(5, [5,4,3,2,1,2,3,4,5]));
// console.log(tel(2, [5,4,3,2,1,2,3,4,5]));
// console.log(tel(0, [1,1,1,1,1,1,1,1,1]));