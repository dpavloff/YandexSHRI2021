// module.exports 
const tele = (amount, costsArray) => {
    let combos = [];

    if (costsArray.length < 1 || amount === 0 || !costsArray.find(element => element < amount)) {
        return "";
    }

    var combinationSum = function(candidates, target, combos, currCombo, index) {

        if (target === 0) combos.push(target, [...currCombo]);

        if (target < 0) return;
      
        for (let i = index; i < candidates.length; i++) {

          if (candidates[i] <= target) {

            currCombo.push(i + 1);

            combinationSum(candidates, target - candidates[i], combos, currCombo, i);

            currCombo.pop();
          } else {
            //   currCombo.push(i + 1);
              combos.push([target, [...currCombo]]);
              currCombo.pop();
          }
        }
    }

    combinationSum(costsArray, amount, combos, [], 0);

    for (let i = 0; i < combos.length; i++) {
        // добавляем в к каждой комбинацию количество "разнообразных" индексов и длину 
        combos[i][1] = [combos[i][1], new Set(combos[i]).size, combos[i].length];
        combos[i][2] = Number(combos[i][1].sort().reverse().join(''));   
    }

    let maxLen = 0, maxVariety = 0;

    for (let i = 0; i < combos.length; i++) {
        const element = combos[i];
        maxLen = maxLen < element[2] ? element[2] : maxLen;
    }
    
    let lengthyArr = combos.filter(x => x[2] === maxLen);

    for (let i = 0; i < lengthyArr.length; i++) {
        const element = lengthyArr[i];
        maxVariety = maxVariety < element[1] ? element[1] : maxVariety;
    }

    let varietyArr = lengthyArr.filter(x => x[1] === maxVariety ? x[0] : 0);

    let resultArr = [];

    varietyArr.forEach(ele => {
        resultArr.push(ele[0]);
    });

    let result = Math.max(...resultArr).toString();

    return result;
}

console.log(tele(7, [4, 5, 5, 5, 5, 5, 5, 5, 5])); //"9"
console.log(tele(2, [5,4,3,2,1,2,3,4,5])); //"55"
console.log(tele(0, [1,1,1,1,1,1,1,1,1])); // ""
console.log(tele(2, [9,11,1,12,5,8,9,10,6])); // "33"
console.log(tele(20, [21, 3, 13, 3, 17, 3, 3, 4, 5])); // "977777"
console.log(tele(5, [5,4,3,2,1,2,3,4,5])); // "55555"