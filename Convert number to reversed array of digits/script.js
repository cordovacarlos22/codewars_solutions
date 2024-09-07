function digitize(n) {

  //take n an return it reverse 
  // make sure n is an array if not convert it to an array 
  // have to take into account that number are > 1 otherwise return 0 

  //code here

  //  n is not an array  so i can failing when using reverse method .
  // will have to convert sting to an array then reverse it. 
  // also its failing to convert because n is a number 
  // we could loop over each "INDEX"  or converte to  a STRING and then use the split method to converte it to an array
  // if i converte it to string i may run into an issue cuz i have to check if array is it == 0 value 

  const stringifyNumber = n.toString() // converts N to String 

  // takes stringifyNumber and split return a new array
  // then reverser() method reverses array
  // map method maps over all num and using the Number method we convert each item back to a Number
  const reverseString = stringifyNumber.split('').reverse().map((num) => Number(num))

  return reverseString
} 