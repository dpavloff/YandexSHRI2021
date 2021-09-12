// module.exports 
const tele = (amount, costsArray) => {
    let combos = [];
    let maxLen = 0;

    if (costsArray.length < 1 || amount === 0 || !costsArray.find(element => element < amount)) {
        return "";
    }

    var combinationSum = function(candidates, target, combos, currCombo, index) {

        if (target === 0 && maxLen <= currCombo.length) {
            maxLen = currCombo.length;
            combos.push([...currCombo].sort().reverse());
        } 
        
        else if (target < candidates[index] && currCombo.length > 0 && maxLen <= currCombo.length) {
            maxLen = currCombo.length;
            combos.push([...currCombo].sort().reverse());
        }

        for (let i = index; i < candidates.length; i++) {
            if (candidates[i] <= target) {
                
                currCombo.push(i + 1);

                combinationSum(candidates, target - candidates[i], combos, currCombo, i);

                currCombo.pop();

            }
        }
    }

    combinationSum(costsArray, amount, combos, [], 0);

    let t = combos.filter(p => p !== undefined);

    let max = t.reduce((acc, path) => {
        if (path.length > acc.length)
            return path
        else if (path.length === acc.length) {
            const diff = calcDiff(path, acc)
            if (diff === 0 && path > acc || diff > 0)
                return path
        }

        return acc
    }, "");
    
    function calcDiff(a, b) {
        // Whit Set I remove duplicates from strings
        return new Set(a).size - new Set(b).size
    }

    return max.join('');
}

console.log(tele(7, [4, 5, 5, 5, 5, 5, 5, 5, 5])); //"9"
console.log(tele(2, [5,4,3,2,1,2,3,4,5])); //"55"
console.log(tele(0, [1,1,1,1,1,1,1,1,1])); // ""
console.log(tele(2, [9,11,1,12,5,8,9,10,6])); // "33"
console.log(tele(20, [21, 3, 13, 3, 17, 3, 3, 4, 5])); // "977642"
console.log(tele(5, [5,4,3,2,1,2,3,4,5])); // "55555"
