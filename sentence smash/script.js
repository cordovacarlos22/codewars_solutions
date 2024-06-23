/**
 * The function `smash` takes an array of words, joins them together with a space in between, and
 * returns the resulting string.
 * @param words - The `smash` function takes an array of words as input and joins them together into a
 * single string with spaces in between each word.
 * @returns The function `smash` is returning the concatenated string of the words in the array joined
 * by a space. In this case, the function call `smash(['hello', 'world', 'this', 'is', 'great ']);`
 * will return the string 'hello world this is great'.
 */
function smash(words) {
  console.log(words.join(' '));
  return words.join(' ');
};

smash(['hello', 'world', 'this', 'is', 'great ']); // => 'hello world this is great