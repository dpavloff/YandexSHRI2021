const solution = (input) => {
    if (input.length === 0)
        return false;

    while (input.length > 0) {
        if (input.slice(-4) === '1111') {
            input = input.slice(0, input.length - 4);
        } else 
        if (input.slice(-3) === '711') {
            input = input.slice(0, input.length - 3);
        } else 
        if (input.slice(-1) === '7')  {
            input = input.slice(0, input.length - 1);
        } else 
        return false;
    }

    return true;
}

module.exports = solution;