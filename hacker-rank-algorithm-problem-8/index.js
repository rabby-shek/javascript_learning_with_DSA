const arr = [1,2,3,4,5];

const miniMaxSum = (arr) => {
    let len = arr.length;
    let minSum = 0;
    let maxSum = 0;

    arr.sort((a, b) => a - b);

    for (let i = 0; i < len; i++) {
        if (i !== len - 1) {
            minSum += arr[i];
        }
        if (i !== 0) {
            maxSum += arr[i];
        }
    }

    console.log( minSum, maxSum);
}

miniMaxSum(arr);
