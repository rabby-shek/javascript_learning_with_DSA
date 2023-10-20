const arr = [2,3,5];

const longSum = (ar) =>{
     let sum = 0;
    for(let i  = 0 ; i < ar.length ; i++){
        sum  = sum + ar[i];
    }
    return [sum];

}
longSum(arr);