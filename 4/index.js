// module.exports 
const tele = (amount, costsArray) => {
    let combos = [];

    if (costsArray.length < 1 || amount === 0 || !costsArray.find(element => element < amount)) {
        return "";
    }

    var combinationSum = function(candidates, target, combos, currCombo, index) {

        if (target === 0) combos.push(target, [[...currCombo]]);

        if (target < 0) return;
      
        for (let i = index; i < candidates.length; i++) {

        //   if (candidates[i] <= target) {

            currCombo.push(i + 1);

            combinationSum(candidates, target - candidates[i], combos, currCombo, i);

            currCombo.pop();
        //   } 
          
        //   else

        //   if (target < candidates[i] && target > 0) {
        //       combos.push([target, [...currCombo]]);
        //   }
        }
    }

    combinationSum(costsArray, amount, combos, [], 0);

    let minMoney = Number.MAX_VALUE;

    for (let i = 0; i < combos.length; i++) {
        const currMoney = combos[i][0];

        if (minMoney > currMoney) minMoney = currMoney;
    }

    combos = combos.filter(x => x[0] === minMoney);

    for (let i = 0; i < combos.length; i++) {
        let element = combos[i][1]; 
        combos[i][1] = Number(element.sort().reverse().join(''));   
    }

    let finalArr = [];

    combos.forEach(ele => {
        finalArr.push(ele[1]);
    })
    
    let result = Math.max(...finalArr).toString();

    return result;
}

console.log(tele(7, [4, 5, 5, 5, 5, 5, 5, 5, 5])); //"9"
console.log(tele(2, [5,4,3,2,1,2,3,4,5])); //"55"
console.log(tele(0, [1,1,1,1,1,1,1,1,1])); // ""
console.log(tele(2, [9,11,1,12,5,8,9,10,6])); // "33"
console.log(tele(20, [21, 3, 13, 3, 17, 3, 3, 4, 5])); // "977777"
console.log(tele(5, [5,4,3,2,1,2,3,4,5])); // "55555"