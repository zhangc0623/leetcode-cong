/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']'的字符串 s ，判断字符串是否有效。
 有效字符串需满足：
 左括号必须用相同类型的右括号闭合。
 左括号必须以正确的顺序闭合。
 * @param s
 * @returns {boolean}
 */
function isValid(s) {
    if (s.length % 2 !== 0) {
        return false
    }
    let arr = []
    const map = new Map([
        [')', '('],
        ['}', '{'],
        [']', '[']
    ])
    for (let i of s) {
        if (map.has(i)) {
            if (!arr.length || arr[arr.length - 1] !== map.get(i)) {
                return false
            }
            arr.pop()
        }else {
            arr.push(i)
        }
    }
    return !arr.length
}

console.log(isValid('{[]}'))
