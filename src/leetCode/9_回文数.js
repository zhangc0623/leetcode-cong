/**
 * 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false
 * 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 * @param x
 * @returns {boolean}
 */
function isPalindrome(x) {
    let list = x.toString()
    let flag = false
    for (let i = 0; i < list.length / 2; i++) {
        if (list[i] == list[list.length-1 - i]) {
            flag = true
        } else {
            flag = false
            break;
        }
    }
    return flag
}

console.log(isPalindrome(121))
