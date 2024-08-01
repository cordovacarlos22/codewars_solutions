var humanYearsCatYearsDogYears = function (humanYears) {

  let catYears = 0;
  let dogYears = 0;
  // Your code here!

  for (let i = 0; i < humanYears; i++) {

    if (catYears < 15 || dogYears < 15) {
      catYears = 15;
      dogYears = 15;
    } else if (catYears < 24 || dogYears < 24) {
      catYears += 9;
      dogYears += 9;
    } else {
      catYears += 4;
      dogYears += 5;
    };
  };

  return [humanYears, catYears, dogYears];
};
