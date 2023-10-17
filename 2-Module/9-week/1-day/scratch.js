const addTen = (n) => n + 10

const sumArr = arr => arr.reduce((acc, ele) => acc += ele, 0)


const sumMatrix = arr => {
    let sum = 0
    arr.forEach(ele => {
        ele.forEach(num => sum += num)
    })
    return sum
}