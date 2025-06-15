console.log(isPalindrome(-121));
function isPalindrome(x) {
    var prepareNumber = x.toString().split("").reverse().join("");
    if (x === Number(prepareNumber)) {
        return true;
    }
    return false;
}
