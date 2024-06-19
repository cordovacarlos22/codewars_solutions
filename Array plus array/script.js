/**
 * The function `arrayPlusArray` takes two arrays as input and returns the sum of all elements in both
 * arrays using the `reduce` method.
 * @param arr1 - arr1 is an array containing the first set of numbers that need to be added together.
 * @param arr2 - arr2 is an array that contains numbers which you want to add to the numbers in arr1.
 * @returns The function `arrayPlusArray` is returning the total sum of all elements in `arr1` and
 * `arr2` using the `reduce` method.
 */
function arrayPlusArray(arr1, arr2) {
  // solution 1 using for loop :
  //   let result = 0;
  //     for (let i = 0; i < arr1.length; i++) {
  //         result += arr1[i]
  //     }
  //     for (let j = 0; j < arr2.length; j++) {
  //         result += arr2[j]
  //     }
  //     return result;

  //solution 2 using array method reduce.

 /* The line `let total = arr1.reduce((sum, value) => sum + value, 0 + arr2.reduce((sum, value) => sum
 + value, 0));` in the `arrayPlusArray` function is using the `reduce` method to calculate the total
 sum of all elements in both `arr1` and `arr2`. */
  let total = arr1.reduce(
    (sum, value) => sum + value, 0 + arr2.reduce((sum, value) => sum + value, 0)
  );
  /* `return total;` in the `arrayPlusArray` function is returning the total sum of all elements in
  both `arr1` and `arr2` that was calculated using the `reduce` method. This total sum is the result
  of adding together all the elements in both arrays. */
  return total;
}