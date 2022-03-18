/**
 * 实现 strStr() 函数
 * @param haystack
 * @param needle
 * @returns {number}
 */
function strStr(haystack, needle) {
    if (!needle) {
        return 0
    }
    if (needle.length > haystack.length) {
        return -1
    }
    for (let i = 0; i < haystack.length; i++) {
        let flag = true
        for (let j = 0; j < needle.length; j++) {
            // 不等，结束循序
            if (needle[j] != haystack[i+j]) {
                flag = false
                break
            }
        }
        if (flag) {
            return i
        }
    }
    return -1
}

console.log(strStr("hello", "ll"))
