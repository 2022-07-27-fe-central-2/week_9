// you are given an array, of arbitrary length, rotate the array x amount of times to the left,
// arr = [1,2,3,4,5], amount = 3 [4,5,1,2,3]
// if total rotations 3 times -> assume 3 sec total (1 per second)
// [1,2,3,4,5], 100 times -> 100 sec
// under the hood when rotating one by one
// [empty ,2,3,4,5] first will remove 0th element, then insert at end, then all elements shift to the left
// [2,3,4,5,1] -> O(n) linear time for each element that is shifted and pushed
// -> O(n^2) quadratic run time for every element that is shifted and pushed, remaining elements must also shift to the left
// big o notation : the rate of time that increases per data input for time complexity
//

const arr1 = Array.from(Array(22).keys())
const arr2 = Array.from(Array(22).keys())

function rotateNaive(arr, count) {
  while (count > 0) {
    arr.push(arr.shift());
    count--;
  }
  return arr
}

function rotateOptimal(arr, count) {
  const breakPoint = count % arr.length
  const front = arr.slice(0, breakPoint);
  const back = arr.slice(breakPoint);
  return back.concat(front);
}

const rotatedArr1 = rotateNaive(arr1, 13)
const rotatedArr2 = rotateOptimal(arr2, 13)
console.log(rotatedArr1)
console.log(rotatedArr2)