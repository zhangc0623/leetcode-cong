function test1() {
    let str = 'true or false and false'
    let re = str.replace('or', '||').replace('and', '&&')
    console.log(re)
    return eval(re)
}

console.log(test1())
