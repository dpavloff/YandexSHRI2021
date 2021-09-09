let costsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const tel = (n, costsArray) => {
    let res = [];
    let del = 1;
    
    if (costsArray.length < 1 || !costsArray.find((e) => e < n) || n === 0) {
      return "";
    }
    
    while (n / del > 1) {
        let num = (n / del) % 10 | 0;
        let min = n;
        costsArray.forEach(e => {
          if (num - e >= 0) {
            min = Math.min(min, num - e);
          }
        });
        del *= 10;
        res.push(costsArray.lastIndexOf(min + num));
      }
    return res.reverse().join("");
};