# 🔀 Merge Sort Algorithm

## 🧩 Problem Statement
Given an array of integers nums[], sort it in ascending order using the Merge Sort algorithm.

---

## 💡 Hint
- Merge Sort is a Divide and Conquer algorithm.
- It recursively divides the array into two halves, sorts them, and merges the sorted halves.

---

## 🛠️ Approach: Merge Sort

### ✅ Pseudo Code
```js
FUNCTION mergeSort(nums, low, high):
    IF low >= high:
        RETURN
    mid = (low + high) / 2
    CALL mergeSort(nums, low, mid)
    CALL mergeSort(nums, mid + 1, high)
    CALL merge(nums, low, mid, high)

FUNCTION merge(nums, low, mid, high):
    CREATE temp array
    SET left = low, right = mid + 1

    WHILE left <= mid AND right <= high:
        IF nums[left] <= nums[right]:
            ADD nums[left] to temp
            INCREMENT left
        ELSE:
            ADD nums[right] to temp
            INCREMENT right

    WHILE left <= mid:
        ADD nums[left] to temp
        INCREMENT left

    WHILE right <= high:
        ADD nums[right] to temp
        INCREMENT right

    FOR i FROM low TO high:
        nums[i] = temp[i - low]
```
### ✅ JavaScript Implementation
```js
function mergeSort(nums, low, high) {
  if (low >= high) return;

  let mid = Math.floor((low + high) / 2);

  mergeSort(nums, low, mid);
  mergeSort(nums, mid + 1, high);

  merge(nums, low, mid, high);
}

function merge(nums, low, mid, high) {
  let temp = [];
  let left = low;
  let right = mid + 1;

  while (left <= mid && right <= high) {
    if (nums[left] <= nums[right]) {
      temp.push(nums[left]);
      left++;
    } else {
      temp.push(nums[right]);
      right++;
    }
  }

  while (left <= mid) {
    temp.push(nums[left]);
    left++;
  }

  while (right <= high) {
    temp.push(nums[right]);
    right++;
  }

  for (let i = low; i <= high; i++) {
    nums[i] = temp[i - low];
  }
}
```
#### Complexity:
- Time - **O(n log n)** for all cases [ **Best**, **Average**, **Worst** ]
- Space - **O(n)**

> - Each division step cuts the array in half → log n divisions.
> - Each merge step processes all n elements → O(n) per level.
> - Extra space is required for merging.

#### 💡 Explanation
- Divide the array recursively into halves until only single elements remain.
- Merge the sorted halves by comparing elements from both parts.
- Use a temporary array temp[] to store sorted elements before copying them back.

---

#### ⚠️ Notes
- Stable sort: Preserves the order of equal elements.
- Not in-place due to auxiliary space (temp[]).
- Preferred for large datasets and when stability is important.
- Works consistently well across all input cases.