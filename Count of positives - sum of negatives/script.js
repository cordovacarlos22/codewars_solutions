function countPositivesSumNegatives(input) {
  // Check for null or empty array
  if (input === null || input.length === 0) {
    return [];
  }

  // Initialize counters
  let positive_count = 0;
  let negative_sum = 0;

  // Loop through the array
  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      positive_count++;
    } else if (input[i] < 0) {
      negative_sum += input[i];
    }
  }

  // Construct the result array
  return [positive_count, negative_sum];
}