function collatz(n) {
  //your code here
  let aux = 1
  while (n !== 1) {
    if (n % 2 === 0) {
      n = n / 2
    } else {
      n = (n * 3) + 1
    };
    aux++
  };
  return aux
};