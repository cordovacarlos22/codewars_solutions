function abbrevName(name) {

  // code away
  const nameArray = name.split(" ")
  let abbreviateName = `${nameArray[0][0]}.${nameArray[1][0]}`

  console.log(abbreviateName.toUpperCase())

  return abbreviateName.toUpperCase()





}