function reverseInteger(num) {
  //   let sign = Math.sign(num);
  //   let reverse = parseInt(Math.abs(num).toString().split("").reverse().join(""));
  //   let result = reverse * sign;
  //   console.log(result);
  let result = 0;

  while (num !== 0) {
    let lastDigit = num % 10;
    result = result * 10 + lastDigit;
    num = num / 10;
  }
  console.log(result);
}

reverseInteger(123);
