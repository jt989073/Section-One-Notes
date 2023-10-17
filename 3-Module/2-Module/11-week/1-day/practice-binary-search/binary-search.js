function linearSearch (arr, target) {

  // Can you solve this in one line?
  return arr.indexOf(target)

};

function binarySearch(arr, target) {

  // Set integers pointing to the high and low range of possible indices
  let low = 0
  let high = arr.length - 1
  // While high and low indices do not overlap...
  while(low <= high){
    // Find the midpoint between high and low indices
    const mid = Math.floor((low + high) / 2)
    const midVal = arr[mid]
    // Compare the target value to the midpoint value
    // If the target equals the midpoint...
    if(target === midVal){
      // Return the midpoint index
      return mid
    } else if(target > midVal){
      // If the target is higher than the midpoint...
        // Move the low pointer to midpoint + 1
      low = mid + 1
    } else {
      // If the target is less than the midpoint...
        // Move the high pointer to midpoint - 1
      high = mid - 1
    }
  }
  // Return -1 if the loop exits with overlapping pointers
  return -1
}


binarySearch([2,4,6,8], 6);  // 2
binarySearch([2,4,6,8], 10);  // -1


module.exports = [linearSearch, binarySearch]