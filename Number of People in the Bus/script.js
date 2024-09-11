var number = function (busStops) {
  // Good Luck!
  // find the total passangers after the last stop 
  // have to consider that passanger on bus are >= 0 
  // we get an array and inside each array are 2 numbers
  // array[0] = number of people that get on the bus
  // array[1] = number of peole that get off the bus at a bus stop .
  // so that tell me i have to loop over the array and stored the last value of passanger 
  // i could add all of the index at possition 0 that will give me a total of people that have gotten on the bus
  // then i could add off the index at possition 1 add them up and rest the total of people on the bus 
  //  i could test my theory by using first test case 

  // total people on the bus 
  //   10 + 3 + 5  = 
  // 10 + 3 = 13 
  // 13 + 5 = 18 
  // total = 18 
  // people that gets off the. bus 
  //  0 + 5 + 8 
  //total  = 13 
  // if we take  18  - 13  = 5 = so this passed the firt test case. 

  //   console.log("test",busStops) // returns nested arrays 


  // lets start coding.
  // 2. have to aux variable 

  // aux variable to count number of people on the bus 
  let peopleOnTheBus = 0

  // aux variable to cound number of people that gets off the bus
  let peopleOffBus = 0



  // step 3 check array lenght to make sure is not 0 
  // code is almost done we have to include a variable to make sure busStops array is >= 0 ;
  if (busStops.length < 0) {
    return
  }

  // 1.  loop over the array
  for (let i = 0; i < busStops.length; i++) {
    peopleOnTheBus += busStops[i][0];
    peopleOffBus += busStops[i][1];
    console.log("test for loop", peopleOnTheBus);
    console.log("test for loop", peopleOffBus);

  };



  //   console.log("result", peopleOnTheBus - peopleOffBus ) // should return result

  //even to code is working it could fail if inter array has a longer length. there room for improvement

  return peopleOnTheBus - peopleOffBus





}