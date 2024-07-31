// Sum Numbers
function sum(numbers) {
  
  let total = numbers.reduce((sumTotal, currentValue) => sumTotal + currentValue, 0);
  return total

};