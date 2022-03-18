function romanToInt(s) {
    s = s.replace('IV', 'a').replace('IX', 'b')
        .replace('XL', 'c').replace('XC', 'd')
        .replace('CD', 'e').replace('CM', 'f')
    let result = 0
    let map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
        'a': 4,
        'b': 9,
        'c': 40,
        'd': 90,
        'e': 400,
        'f': 900,
    }
    for (let i = 0; i < s.length; i++) {
        result += map[s[i]]
    }
    return result
}

console.log('III')
