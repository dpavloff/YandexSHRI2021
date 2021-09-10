function tel(money, costsArray) {
    let result = 0;

    if (costsArray.length < 1 || money === 0 || !costsArray.find(e => e < money)) {
        return "";
    }

    costsArray.forEach((element, index) => {
        if (result < index++ && element < money && Number.isInteger(money / element)) {
            result = index++
        }
    });



    // let result = costsArray.find(perfectCost);
    // (x < money) && (x / money % 10 === 0););

    let finalIndex = result - 1;

    return result.toString().repeat(money / costsArray[finalIndex]);
};

console.log(tel(0,[1,1,1,1,1,1,1,1,1]));