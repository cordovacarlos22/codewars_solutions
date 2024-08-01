function fakeBin(x) {

  // Your code here
  return x.split('').map(item => item < 5 ? 0 : 1).join('')

}