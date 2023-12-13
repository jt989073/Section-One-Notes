const addNumToArray = (arr, num) => {
    for(let i = 0; i < arr.length; i++){
        arr[i] += num
    }
    return arr
}


addNumToArray([1,2,3,4], 5)
