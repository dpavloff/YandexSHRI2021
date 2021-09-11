function tel(money, costsArray) {
    let arr = [];

    if (costsArray.length < 1 || money === 0 || !costsArray.find(element => element < money)) {
        return "";
    }

    let combinationSum = (candidates, target) => {
        var buffer = [];
        var result = [];
        search(0, target);
        return result;
      
        function search(startIdx, target) {
          if (target === 0) return result.push(buffer.slice());
          if (target < 0) return;
          if (startIdx === candidates.length) return;
          buffer.push(candidates.indexOf(candidates[startIdx]) + 1);
          search(startIdx, target - candidates[startIdx]);
          buffer.pop();
          search(startIdx + 1, target);
        }
    }

    arr = combinationSum(costsArray, money);

    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i].sort().reverse().join(''));   
    }
    
    let result = Math.max(...arr).toString();

    return result;
}

console.log(tel(5, [5,4,3,2,1,2,3,4,5]));