// you are an array, of arbitrary length, rotate the array x amount of times,
// [1,2,3,4,5], 3 [4,5,1,2,3], total rotations 3 times -> 3 sec
// [1,2,3,4,5,6,7,8,9,10], 100 times -> 100 sec
// [empty ,2,3,4,6,]
// [2,3,4,] -> O(n) linear O(n^2)
// big o notation : the rate of time that increases per data input
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