function merge(arr, left, mid, right) {
  const n1 = mid - left + 1; // length of left half
  const n2 = right - mid; // length of right half

  // temporary arrays to hold the two halves
  const L = new Array(n1);
  const R = new Array(n2);

  // copy left half of array into L
  for (let i = 0; i < n1; i++) {
    L[i] = arr[left + i];
  }

  // copy right half of the array into R
  for (let i = 0; i < n2; i++) {
    R[i] = arr[i + mid + 1];
  }

  let i = 0; // tracks position in L
  let j = 0; // tracks position in R
  let k = left; // array index we will use to begin merging back into the original array

  // merge the temporary arrays back into the original array
  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    k++; // move to the next index to be copied into the original array
  }

  // check if any array elements are left and merge them, this is the case if L or R runs out
  // of elements before the other one does.
  while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
  }
  while (j < n2) {
    arr[k] = R[j];
    j++;
    k++;
  }
}

function mergeSort(arr, left, right) {
  if (left >= right) {
    return; // base case of array length equal to 1 or 0 (already sorted)
  }
  const mid = Math.floor(left + (right - left) / 2);

  mergeSort(arr, left, mid); // left half
  mergeSort(arr, mid + 1, right); // right half

  merge(arr, left, mid, right); // merge after being split in arrays of length 1;
}

function printArray(arr) {
  console.log(arr.join(" "));
}

// Driver code
const arr = [12, 11, 13, 5, 6, 7, 7, -1, 0];
console.log("Given array is");
printArray(arr);

mergeSort(arr, 0, arr.length - 1);

console.log("\nSorted array is");
printArray(arr);
