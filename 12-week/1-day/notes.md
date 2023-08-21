## Bubble Sort
- Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until no swaps are needed, indicating that the list is sorted. While conceptually straightforward, bubble sort is not efficient for large lists and has a worst-case and average-case time complexity of O(n^2).

## Insertion Sort
- Insertion sort builds the sorted array one item at a time by repeatedly taking an unsorted element and inserting it into its correct position in the sorted portion of the array. It iterates through the unsorted elements, shifting elements to the right as necessary to create space for the new element. Insertion sort can be efficient for small datasets or partially sorted lists, with a best-case time complexity of O(n) and an average-case and worst-case time complexity of O(n^2).

## Selection Sort
- Selection sort divides the input array into two portions: the sorted portion on the left and the unsorted portion on the right. It repeatedly finds the minimum (or maximum) element from the unsorted portion and swaps it with the first unsorted element. This process continues until the entire array is sorted. Selection sort has a consistent time complexity of O(n^2), regardless of the input order.

## Merge Sort
- Merge sort is a divide-and-conquer sorting algorithm that divides the input array into two halves, sorts each half recursively, and then merges the sorted halves back together to create the final sorted array. It has a consistent time complexity of O(n log n) in all cases, making it more efficient than bubble, insertion, and selection sorts for larger datasets.

## Quick Sort
- Quick sort is another divide-and-conquer sorting algorithm. It selects a 'pivot' element, partitions the input array into two subarrays (elements smaller than the pivot and elements greater than the pivot), and then recursively sorts these subarrays. Quick sort has an average-case time complexity of O(n log n), but its performance can degrade to O(n^2) in the worst case. It's often considered faster than merge sort due to its lower constant factors and efficient use of memory.