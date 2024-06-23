/**
 * The function `squareSum` calculates the sum of the squares of numbers in an array.
 * @param numbers - The `squareSum` function takes an array of numbers as input and calculates the sum
 * of the squares of those numbers.
 * @returns The function `squareSum` is returning the sum of the squares of the numbers in the input
 * array. The correct outputs for the provided test cases are:
 * - `squareSum([])` returns 0
 * - `squareSum([1, 2])` returns 5
 * - `squareSum([0, 3, 4, 5])` returns 50
 */
function squareSum(numbers) {
  if (numbers.length < 0) {
      return 0;
  } else {
    console.log(numbers.reduce((times, value) => (value * value) + times, 0));
    return numbers.reduce((times, value) => (value * value) + times, 0);
   }
}
squareSum([])
squareSum([1, 2])
squareSum([0, 3, 4, 5]) 

// 0*0 = 0
// 3*3 = 9 
// 4*4 = 16 
// 5*5 = 25
//  sum = 50  