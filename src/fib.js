export const fib = num => {
    if (!Number.isInteger(num)) {
        throw new TypeError('The parameter must be an integer!');
    }
    if (num < 0) {
        throw new TypeError('The parameter must be >= 0');
    }
    let firstInteger = 0;
    let secondInteger = 1;
    let thirdInteger;
    const result = [];
    switch (num) {
        case 0:
            return [];
        case 1:
            return [firstInteger];
        default:
            result.push(firstInteger);
            result.push(secondInteger);
            for (let i = 2; i < num; i++) {
                thirdInteger = firstInteger + secondInteger;
                result.push(thirdInteger);
                firstInteger = secondInteger;
                secondInteger = thirdInteger;
            }
            return result;
    }
};

