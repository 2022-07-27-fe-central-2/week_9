// you are given an array, and a target -> number
// the array going to be sorted, the values in the array are numeric
// your goal is to find whether the target exists in the array or not
// return boolean true or false

// [1,2,3], 2
// true
// [1,2,3], 5
// false

// i eat it
// 1. identify **
// 2. examples , input and output, **
// 3. analyze, (pseudo code)
// 4. test, test pseudo code
// 5. implement: actual coding
// 6. test : test code
// 7. repeat

let a = Array.from(Array(20).keys());

// brute force O(n)
// we are going loop through the array
// inside the array we will compare each element with target, if target is found return true
// at the end of the loop return false ( we have not found target)
const brute_search = (arr, t) => {
  for (let i = 0; i < arr.length; i ++) {
    if (arr[i] === t) {
      return true
    }
  }
  return false
}

// console.log(brute_search(a, 19))

// divide on conquer
// binary search O(log n)

// we are going to create two variable low and high
// we are going to loop through the array while low <= high
// inside the loop we create temporary variable called middle
// we compare middle with target if middle = target: return true
// if target is greater than middle, we reassign low to middle+1,
// if target is less than middle, we reassign high to middle-1
// at the end of this loop, we return false

const binary_search = (arr, t) => {
  let low = 0;

  let high = arr.length-1

  while (low <= high) {
    let middle = Math.floor((low + high)/ 2)
    if (t === arr[middle]) {
      return true
    }
    if (t < arr[middle]) {
      high = middle - 1
    }
    if (t > arr[middle]) {
      low = middle + 1
    }
  }
  return false
}
console.log(binary_search(a, 20))