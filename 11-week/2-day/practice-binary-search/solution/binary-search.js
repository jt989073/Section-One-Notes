function linearSearch (arr, target) {

  // Can you solve this in one line?
  return arr.indexOf(target)
};

function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const midValue = arr[mid];

    if (target === midValue) {
      return mid; // Target found, return index
    } else if (target > midValue) {
      low = mid + 1; // Target is on the right side, move low pointer
    } else {
      high = mid - 1; // Target is on the left side, move high pointer
    }
  }

  return -1; // Target not found
}


module.exports = [linearSearch, binarySearch]