# ⚡ Quick Sort Algorithm

## 🧩 Problem Statement
Given an array of integers nums[], sort it in ascending order using the Quick Sort algorithm.

---

## 💡 Hint
- Quick Sort is a Divide and Conquer algorithm.
- Choose a pivot element, partition the array around the pivot, and recursively sort the two subarrays.
- All elements less than pivot go to the left, and greater ones go to the right.

---

## 🔀 Approach: Quick Sort

### ✅ Pseudo Code
```js
FUNCTION quickSort(nums, low, high):
    IF low < high:
        pIndex = partition(nums, low, high)
        CALL quickSort(nums, low, pIndex - 1)
        CALL quickSort(nums, pIndex + 1, high)

FUNCTION partition(arr, low, high):
    pivot = arr[low]
    i = low
    k = high

    WHILE i < k:
        WHILE arr[i] <= pivot AND i <= high - 1:
            i++
        WHILE arr[k] > pivot AND k >= low + 1:
            k--
        IF i < k:
            SWAP arr[i], arr[k]

    SWAP arr[low], arr[k]
    RETURN k
```
### ✅ JavaScript Implementation
```js
function quickSort(nums, low, high) {
  if (low < high) {
    const pIndex = partition(nums, low, high);
    quickSort(nums, low, pIndex - 1);
    quickSort(nums, pIndex + 1, high);
  }
}

function partition(arr, low, high) {
  let pivot = arr[low];
  let i = low;
  let k = high;

  while (i < k) {
    while (arr[i] <= pivot && i <= high - 1) {
      i++;
    }
    while (arr[k] > pivot && k >= low + 1) {
      k--;
    }
    if (i < k) {
      [arr[i], arr[k]] = [arr[k], arr[i]];
    }
  }

  [arr[low], arr[k]] = [arr[k], arr[low]];
  return k;
}
```
#### Complexity:
- Time - **O(n log n)** for [ **Best**, **Average** ], **O(n²)** for [ **Worst** ] (when array is already sorted) 
- Space - **O(log n)** (due to recursive calls)

> - The average case assumes fairly balanced partitions.
> - The worst case (e.g., sorted array with bad pivot choice) leads to unbalanced recursion depth.

#### 💡 Explanation
- Select the first element as the pivot.
- Use two pointers:
  - i moves from the left to find elements greater than pivot.
  - k moves from the right to find elements smaller than pivot.
- Swap when arr[i] > pivot and arr[k] < pivot.
- When pointers cross, place the pivot in its correct sorted position.
- Recursively apply the same logic to subarrays on left and right.

---

#### ⚠️ Notes
- Not stable: Relative order of equal elements may change.
- In-place sort: Requires no extra array; done using index swapping.
- Very fast for large and unsorted datasets.
- You can choose random pivot to improve performance on sorted inputs.