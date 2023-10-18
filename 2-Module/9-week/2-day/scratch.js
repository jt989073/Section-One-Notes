const add10 = n => n + 10 // constant time complexity

const sumArr = arr => arr.reduce((acc, ele) => acc += ele, 0) // linear time complexity

const sumMatrix = arr => {
    let sum = 0
    arr.forEach(subArr => {
        subArr.forEach(ele => {
            sum += ele
        })
    })
    return sum
} // quadratic time complexity 