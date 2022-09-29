// you are given a *sorted* array, also a target, you must return the 2 indices that sum up to the target
// [1, 4, 8, 12], target = 20 => [2, 3]
// naive approach
// outer loop increments by 1 each iteration until length - 1,
// inner loop increments by 1 each iteration until length

// speed, time-complexity, space space-complexity, readability

const elements = Array.from(Array(20).keys())
console.log(elements)

target = 37

// o(n^2)
const two_sum_naive = (arr, t) => {
  for (let i = 0; i <arr.length -1; i++) {
    for (let j = i+1; j <arr.length; j++) {
      if (arr[i] + arr[j] == t) {
        return [i,j]
      }
    }
  }
  return -1
}

// O(n), space O(n)
// create a cache {}
// loop through the arr length,
// each time we see an element we put it in the cache with the key as the element and the index as the value
// then we go ahead and check if (target - arr[i] in cache) , return the indices
const two_sum_cache = (arr, t) => {
  cache = {}
  for (let i = 0; i < arr.length; i++) {
    cache[arr[i]] = i
    if (target - arr[i] in cache) {
      console.log(cache)
      return [cache[target-arr[i]], i]
    }
  }
  return -1
}

// we create two pointers, low =0 , high= length of array -1
// loop while low < high
// if arr[low] + arr[high] == target: we return the indices
// if arr[low] + arr[high] > target: we decrement high
// if arr[low] + arr[high] < target: we increment high
const two_sum_space = (arr, t) => {
  low = 0
  high = arr.length - 1
  while (low < high) {
    if (arr[low] + arr[high] === t) {
      return [low, high]
    }
    while (arr[low] + arr[high] > t) {
      high -= 1
    }
    while (arr[low] + arr[high] < t) {
      low += 1
    }
  }
  return -1
}

// console.log(two_sum_naive(elements, target))
// console.log(two_sum_cache(elements, target))
console.log(two_sum_space(elements, target))