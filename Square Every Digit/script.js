function squareDigits(num) {
  const squareNum = num.toString().split('').map((number) => Number(number) ** 2).join('');
  return Number(squareNum);
} 