// Sliding windows
// initialize the array with k elenments
// slide windows by start from the kth element
function maxSum(arr: number[], n: number, k: number): number {
  let maxSum: number = 0;

  for (let i = 0; i < k; i++) {
    maxSum += arr[i];
  }
  let windowSum = maxSum;
  for (let i = k; i < n; i++) {
    windowSum += arr[i] - arr[i - k];
    if (windowSum >= maxSum) maxSum = windowSum;
  }
  return maxSum;
}

function minSum(arr: number[], n: number, k: number): number {
  let sum: number = 0;

  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }
  let windowSum = sum;
  for (let i = k; i < n; i++) {
    windowSum += arr[i] - arr[i - k];
    if (windowSum <= sum) sum = windowSum;
  }
  return sum;
}

console.log(maxSum([1, 4, 2, 10, 2, 3, 1, 0, 20], 9, 4));
