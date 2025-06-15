function isHappyNumber(n) {
    let storePrevValues = [];

    while (n !== 1 && !storePrevValues.includes(n)) {
        storePrevValues.push(n);

        let toArray = n.toString().split('');
        n = 0;
        for (let i = 0; i < toArray.length; i++) {
            n += Math.pow(Number(toArray[i]), 2);
        }
    }

    return n === 1;
}

console.log(isHappyNumber(19)); // true
console.log(isHappyNumber(2));  // false
