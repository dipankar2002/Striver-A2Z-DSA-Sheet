# 🔗 Union of Two Arrays

## 🧩 Problem Statement
Given two arrays nums1 and nums2, return the union of both arrays.
The union should contain all distinct elements from both arrays.

```
**Example:**
- Input: nums1 = [1, 2, 2, 3], nums2 = [2, 3, 4, 5]
- Output: [1, 2, 3, 4, 5]
```

---

## 💡 Hint
- Use a Map or Set to store unique elements.
- If arrays are sorted, use two pointers to merge efficiently without duplicates.

---

## 🧠 Using Map (as Object) – Brute Force Style
### ✅ Pseudo Code
```js
FUNCTION unionArray_1(nums1, nums2):
    CREATE empty map (object)
    FOR each element in nums1:
        ADD to map if not already present
    FOR each element in nums2:
        ADD to map if not already present
    RETURN all values from map as array
```
#### Complexity:
- Time - **O(n + m)**
- Space - **O(n + m)**
#### 💡 Explanation
- Use JS object as a hashmap to store unique elements from both arrays.
- Object.values(map) returns the union as an array.
- Not recommended in real code due to misuse of Map and .hasOwnProperty.

---

## 🧱 Using Set – Better & Clean Approach
### ✅ Pseudo Code
```js
FUNCTION unionArray_2(nums1, nums2):
    CREATE empty Set
    FOR each element in nums1:
        ADD to Set
    FOR each element in nums2:
        ADD to Set
    RETURN Array from Set
```
#### Complexity:
- Time - **O(n + m)**
- Space - **O(n + m)**
#### 💡 Explanation
- Set automatically handles duplicate removal.
- Combines both arrays by adding their elements to the Set.
- Clean, readable, and works for both sorted and unsorted arrays.

---

## ⚡ Optimal Approach (Two Pointers – for Sorted Arrays)
### ✅ Pseudo Code
```js
FUNCTION unionArray_3(nums1, nums2):
    SET i = 0, j = 0
    WHILE i < nums1.length AND j < nums2.length:
        IF nums1[i] <= nums2[j]:
            IF union is empty OR last element ≠ nums1[i]:
                ADD nums1[i] to union
            INCREMENT i
        ELSE:
            IF union is empty OR last element ≠ nums2[j]:
                ADD nums2[j] to union
            INCREMENT j

    WHILE i < nums1.length:
        ADD nums1[i] to union if it's not duplicate
        INCREMENT i

    WHILE j < nums2.length:
        ADD nums2[j] to union if it's not duplicate
        INCREMENT j

    RETURN union
```
#### Complexity:
- Time - **O(n + m)** (single pass through both arrays)
- Space - **O(n + m)**
#### 💡 Explanation
- Works only when both arrays are sorted.
- Uses two pointers to merge both arrays efficiently.
- Avoids duplicates by checking the last inserted element.

---

#### ⚠️ Notes
- All approaches ensure the union contains unique elements only.
- If arrays are not sorted, sort them before using the two-pointer method.
- The Set-based method is cleanest for unsorted arrays.