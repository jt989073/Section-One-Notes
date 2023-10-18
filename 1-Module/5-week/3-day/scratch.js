// Write a recursive function, `range`, that takes a start and an end and returns
// an array of all numbers in that range, exclusive. If the end number is less than
// the start, return an empty array.

// Examples:

const range = (start, end, newArr = []) => {

    if(start >= end){
        return newArr
    }
    newArr.push(start)
    // console.log(newArr)
    debugger
    return range(start + 1, end, newArr)

}

console.log(range(1, 5))