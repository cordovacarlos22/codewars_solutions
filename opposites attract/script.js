/**
 * The function `lovefunc` determines if one of the flowers is even and the other is odd.
 * @param flower1 - The `lovefunc` function you provided checks if one of the flowers is even and the
 * other is odd. If this condition is met, it returns `true`, indicating that the flowers are in love.
 * Otherwise, it returns `false`.
 * @param flower2 - The `lovefunc` function takes two parameters `flower1` and `flower2`. It checks if
 * one of the flowers is even and the other is odd. If this condition is met, it returns `true`,
 * indicating that the flowers are in love. Otherwise, it returns `false`.
 * @returns `true` if one of the flowers is even and the other is odd, otherwise it returns `false`.
 */
function lovefunc(flower1, flower2) {
  // moment of truth
  if (flower1 % 2 == 0 && flower2 % 2 == 1 || flower1 % 2 == 1 && flower2 % 2 == 0) {
    return true
  } else {
    return false
  };
};