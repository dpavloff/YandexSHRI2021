// Javascript program to find out
// all combinations of positive
// numbers that add upto given
// number

/* arr - array to store the
combination
index - next location in array
num - given number
reducedNum - reduced number */
function findCombinationsUtil(arr, index, num, reducedNum) {
    // Base condition
    if (reducedNum < 0)
        return;

    // If combination is
    // found, print it
    if (reducedNum == 0) {
        for (let i = 0; i < index; i++)
            console.log(arr[i] + " ");
        return;
    }

    // Find the previous number
    // stored in arr[]. It helps
    // in maintaining increasing
    // order
    let prev = (index == 0) ? 1 : arr[index - 1];

    // note loop starts from
    // previous number i.e. at
    // array location index - 1
    for (let k = prev; k <= num; k++) {
        // next element of
        // array is k
        arr[index] = k;

        // call recursively with
        // reduced number
        findCombinationsUtil(arr, index + 1, num, reducedNum - k);
    }
}

/* Function to find out all
combinations of positive
numbers that add upto given
number. It uses findCombinationsUtil() */
function findCombinations(n) {
    // array to store the combinations
    // It can contain max n elements
    let arr = [];

    // find all combinations
    arr = findCombinationsUtil(arr, 0, n, n);
}

// Driver Code

let n = 5;
// combinationSum(5, [5,4,3,2,1,2,3,4,5]);

function combinationSum(candidates, target) {
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

console.log(combinationSum([5,4,3,2,1,2,3,4,5], 5))