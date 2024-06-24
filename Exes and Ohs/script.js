/**
 * The function XO takes a string as input and returns true if the number of 'x's and 'o's in the
 * string are equal, otherwise it returns false.
 * @param str - The function `XO` you provided is designed to check if the number of 'x's and 'o's in a
 * given string are equal. If they are equal, the function returns `true`, otherwise it returns
 * `false`.
 * @returns The function `XO` returns `true` if the number of 'x's and 'o's in the input string `str`
 * are equal, otherwise it returns `false`.
 */
function XO(str) {
  //code here
  let xCount = 0;
  let oCount = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] == 'x' || str[i] == 'X') {
      xCount++
    } else if (str[i] == 'o' || str[i] == 'O') {
      oCount++
    };
  };

  if (xCount == oCount) {
    return true
  } else {
    return false
  }
};