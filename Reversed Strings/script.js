function solution(str) {
  let splitString = str.split(""); // Step 1. Use the split() method to return a new array
  let reverseArray = splitString.reverse();// Step 2. Use the reverse() method to reverse the new created array
  let joinArray = reverseArray.join("");
  return joinArray;


}