let str = 'true and false and true'
function test1() {
    if (!str || !str.split(' ').length) {
        return 'error'
    }
    let arr = str.split(' ')
    return test(arr)
}

// console.log('------------------', test1())


function test(arr) {
    console.log((arr[1] != 'or' && arr[1] != 'and') ||
        ((arr[1] == 'or' && arr[2] == 'or') || (arr[1] == 'and' && arr[2] == 'and'))
        || (arr.length % 2 == 0 && arr.length % 3 != 0))
    if (arr.length == 1 && arr[0] != 'or' && arr[0] != 'and') {
        // 只有一个，返回当前
        return JSON.parse(arr[0])
    }else if ((arr[1] != 'or' && arr[1] != 'and') ||
        ((arr[1] == 'or' && arr[2] == 'or') || (arr[1] == 'and' && arr[2] == 'and'))
        || (arr.length % 2 == 0 && arr.length % 3 != 0)) {
        return 'error'
    } else if (arr.indexOf('and') > -1) {
        // 存在and，优先计算and
        let index = arr.indexOf('and')
        let re = JSON.parse(arr[index - 1]) && JSON.parse(arr[index + 1])
        console.log('re---', re)
        arr.splice(index-1, 3, re)
        console.log('arr---', arr)
        return test(arr)
    } else {
        // or
        let re = JSON.parse(arr[0]) || JSON.parse(arr[2])
        console.log('re11111', re)
        arr.splice(0, 3, re)
        return test(arr)
    }
}



console.log(test1())

