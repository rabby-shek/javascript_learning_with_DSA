const computeArrayValue = (A) => {
    let total = 0;

    for (let i = 0; i < A.length; i++) {
        for (let j = i + 1; j < A.length; j++) {
            total += A[i] * A[j];
        }
    }

    return total;
}

const arrayValuePiars = (A) =>{
    for(let i = 1 ; i<=A.length;i++){
        for(let j = 1; j <=A.length; j++){
            return ("(" + A[i],A[j] + ")");
        }
    }

}

// Example usage:
const array = [-3, 7, -2, 3, 5, -2];
const result = computeArrayValue(array);
console.log("The value of the array is:", result);
