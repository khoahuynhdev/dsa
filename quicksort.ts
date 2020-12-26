function quicksort(arr: number[], lo: number, hi: number): void {
  if (lo < hi) {
    const pivot = partition(arr, lo, hi);
    quicksort(arr, lo, pivot - 1);
    quicksort(arr, pivot + 1, hi);
  }
}

function swap(arr: number[], i: number, j:number): void {
  let temp = arr[j];
  arr[j] = arr[i];
  arr[i] = temp;
}

// choose and put pivot in its rightful place in the array
// the 'arr' is used entire time in sorting duration
function partition(arr: number[], lo: number, hi: number): number {
  const pivot = arr[hi];
  let i = lo;
  for (let j = lo; j < hi; j++) {
    if (arr[j] < pivot) {
      swap(arr, i, j);
      i++;
    }
  }
  swap(arr, i, hi);
  return i;
}

function main (): void {
  const arr = [1,5,7,2,6,8,10,9,0,4];
  quicksort(arr, 0, arr.length - 1);
  console.log(arr)
}

main()
