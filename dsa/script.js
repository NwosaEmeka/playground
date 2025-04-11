// Write a function that evaluates a postfix expression (also known as Reverse Polish Notation)
// and returns the result. The expression will contain single-digit integers and the operators +, -, *, and /.
// You can assume the input is always a valid expression!

// Examples:

// evaluatePostfix('12+')
// > 3

// evaluatePostfix('56+7*')
// > 77

const evaluatePostfix = (str) => {
  const operators = ["+", "-", "*", "/"];
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    if (operators.includes(str[i])) {
      // first there must be two numbers before operands
      if (stack.length !== 2) throw error("invalid postfix");

      let result = 0;

      const num1 = stack.shift();
      const num2 = stack.shift();

      switch (str[i]) {
        case "+":
          result = num1 + num2;
          break;
        case "-":
          result = num1 - num2;
          break;
        case "*":
          result = num1 * num2;
          break;
        case "/":
          result = num1 / num2;
          break;
        default:
          break;
      }
      stack.push(result);
    } else {
      stack.push(Number(str[i]));
    }
  }

  return stack[0];
};

console.log(evaluatePostfix("56+7*")); // 77
console.log(evaluatePostfix("12+")); // 3
console.log(evaluatePostfix("24+3/")); // 2

// Given a list of integers, write a function that finds the longest subsequence
// where the difference between consecutive elements is either 1 or -1.
// Return the length of this subsequence.

const longestSubsequence = (arr) => {
  // This uses sliding window technique
  let ans = 0;
  for (let i = 0; i < arr.length; i++) {
    let j = i + 1;
    let count = 1;

    while (arr[i] + 1 === arr[j] || arr[i] - 1 === arr[j]) {
      count++;
      i = j;
      j++;
      ans = Math.max(ans, count);
    }
  }

  return ans;
};

console.log(longestSubsequence([1, 2, 3, 4, 5]));
console.log(longestSubsequence([4, 2, 3, 1, 5]));
console.log(longestSubsequence([10, 11, 7, 8, 9, 12]));

// Given an array arr[] of non-negative integers, where each element arr[i] represents the height of the vertical lines,
// find the maximum amount of water that can be contained between any two lines, together with the x-axis.

// const maximumContainer = (arr) => {
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let j = i + 1;

//     while (j < arr.length) {
//       const height = Math.min(arr[i], arr[j]);
//       const width = j - i;
//       const area = height * width;
//       max = Math.max(max, area);
//       j++;
//     }
//   }
//   return max;
// };

const maximumContainer = (arr) => {
  let max = 0;
  let i = 0;
  let j = arr.length - 1;

  while (i !== j) {
    const height = Math.min(arr[i], arr[j]);
    const width = j - i;
    const area = height * width;
    max = Math.max(max, area);

    if (arr[i] < arr[j]) {
      i++;
    } else {
      j--;
    }
  }
  return max;
};

console.log(maximumContainer([2, 1, 8, 6, 4, 6, 5, 5])); // 25
console.log(maximumContainer([1, 5, 4, 3])); // 6
console.log(maximumContainer([3, 1, 2, 4, 5])); // 12

const availableNumbers = (position = "", numbersTaken = []) => {
  function range(start, end) {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }
  const numberSystem = {
    QB: range(1, 19),
    RB: [...range(1, 49), ...range(80, 89)],
    WR: [...range(1, 49), ...range(80, 89)],
    TE: [...range(1, 49), ...range(80, 89)],
    OL: range(50, 79),
    DL: [...range(50, 79), ...range(90, 99)],
    LB: [...range(1, 59), ...range(90, 99)],
    DB: range(1, 49),
    "K/P": [...range(1, 49), ...range(90, 99)],
    LS: range(1, 99),
  };

  const numbers = [...numberSystem[position]].filter(
    (num) => !numbersTaken.includes(num)
  );
  return numbers;
};

console.log(availableNumbers("QB", [1, 2, 3, 10, 19]));

// Given an array of attack damages and a shield capacity for a spaceship, return the index when cumulative damage exceeds the shiled
// return - 1 if shield survives

const findShieldBreak = (damages, shield) => {
  if (!Array.isArray(damages) || damages.length === 0) return -1;

  let totalDamages = 0;

  for (let i = 0; i < damages.length; i++) {
    totalDamages += damages[i];

    if (totalDamages > shield) {
      return i;
    }
  }

  return -1;
};

console.log(findShieldBreak([10, 20, 30, 40], 50));
console.log(findShieldBreak([1, 2, 3, 4], 50));
console.log(findShieldBreak([50], 30));

// Find the first recurring number in an array
// Example: [2, 5, 1, 2, 3, 5, 1, 2, 4] → returns 2

function firstRecurringNumber(arr) {
  const found = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (found.has(arr[i])) {
      return arr[i];
    } else {
      found.add(arr[i]);
    }
  }
  return undefined;
}

console.log(firstRecurringNumber([2, 5, 1, 2, 3, 5, 1, 2, 4]));

//  Find the first non-repeating character using Map
const findFisrtNonRepeatingCharacter = (str) => {
  const charMap = new Map();

  for (let word of str) {
    charMap.set(word, (charMap.get(word) || 0) + 1);
  }

  for (let s of str) {
    if (charMap.get(s) === 1) return s;
  }

  return null;
};

console.log(findFisrtNonRepeatingCharacter("aabbccddeef")); // f

// Check if two arrays have common elements using Set

const hasCommonElements = (arr1, arr2) => {
  const set = new Set(arr1);

  for (let a of arr2) {
    if (set.has(a)) return true;
  }

  return false;
};

console.log(hasCommonElements([1, 2, 3, 4], [5, 6, 7, 8])); // false
console.log(hasCommonElements([1, 2, 3, 4], [3, 6, 7, 8])); // true

const firstRecurringCharacter = (str) => {
  const charSet = new Set();

  for (let char of str) {
    if (charSet.has(char)) {
      return char;
    } else {
      charSet.add(char);
    }
  }

  return null;
};

console.log(firstRecurringCharacter("hello")); // l

// Find the intersection of two arrays using Set

const intersectionOfArrays = (arr1, arr2) => {
  // const setA = new Set(arr1);
  // const setB = new Set(arr2);

  // const _intersection = new Set();

  // for (let item of setA) {
  //   if (setB.has(item)) {
  //     _intersection.add(item);
  //   }
  // }

  // return [..._intersection]; // return array

  // easier solution
  return [...new Set(arr1)].filter((item) => new Set(arr2).has(item));
};

console.log(intersectionOfArrays([1, 2, 3, 4], [3, 4, 5, 6])); // [3, 4]

// You are given an array of n-1 unique numbers from 1 to n, with one missing number. Find the missing number.

const findMissingNumber = (arr) => {
  const arrSet = new Set(arr);
  for (let i = 1; i <= arr.length + 1; i++) {
    if (!arrSet.has(i)) {
      return i;
    }
  }
};

console.log(findMissingNumber([1, 2, 4, 5])); // Output: 3
console.log(findMissingNumber([3, 7, 1, 2, 8, 4, 5])); // Output: 6

// Given an array and a target sum, return true if any two numbers sum to the target, otherwise return false.

const twoSum = (arr, target) => {
  const numSet = new Set();
  for (let num of arr) {
    if (numSet.has(target - num)) {
      return true;
    }

    numSet.add(num);
  }

  return false;
};

console.log(twoSum([1, 2, 3, 4], 5)); // Output: true  (1+4 or 2+3)
console.log(twoSum([1, 2, 3, 4], 10)); // Output: false

// Given an array, return a new array containing only the duplicate elements.
const findDuplicates = (arr) => {
  const numSet = new Set();
  const dupSet = new Set();

  for (let num of arr) {
    if (numSet.has(num)) {
      dupSet.add(num);
    }
    numSet.add(num);
  }

  return [...dupSet];
};

console.log(findDuplicates([1, 2, 3, 3, 4, 5, 5])); // Output: [3, 5]
console.log(findDuplicates([7, 8, 9, 10])); // Output: []

// Problem: Given an unsorted array of integers, return the length of the longest consecutive elements sequence.

const longestConsecutive = (arr) => {
  const numSet = new Set(arr);
  let count = 0;

  for (let num of numSet) {
    if (!numSet.has(num - 1)) {
      // check if the number is the start of the sequence
      let currentNum = num;
      let currentCount = 1;

      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentCount++;
      }

      count = Math.max(count, currentCount);
    }
  }

  return count;
};

console.log(longestConsecutive([100, 101, 4, 200, 1, 3, 2])); // Output: 4 (sequence: [1,2,3,4]))

// Find the Maximum Average of a Subarray of Length K
// Given an array of integers and an integer k, find the maximum average of any contiguous subarray of length k.
const maxSubarrayAverage = (arr, k) => {
  let max = -Infinity;
  let currentSum = 0;
  let left = 0;

  for (let right = 0; right < arr.length; right++) {
    currentSum += arr[right];

    if (right - left + 1 === k) {
      const average = currentSum / k;
      max = Math.max(max, average);
      currentSum -= arr[left];
      left++;
    }
  }
  return max;
};

console.log(maxSubarrayAverage([1, 12, -5, -6, 50, 3], 4)); // Output: 12.75 ([12,-5,-6,50])
console.log(maxSubarrayAverage([5, 5, 5, 5, 5], 2)); // Output: 5
console.log(maxSubarrayAverage([-1, -12, -5, -6, -50, -3], 2)); // Output: -1.5 ([-1,-12])

// Longest Substring Without Repeating Characters
// Given a string, find the length of the longest substring that contains no repeating characters.

const lengthOfLongestSubstring = (str) => {
  const strSet = new Set();
  let left = 0;
  let max = 0;

  for (let right = 0; right < str.length; right++) {
    while (strSet.has(str[right])) {
      strSet.deq(str[left]);
      left++;
    }
    max = Math.max(max, right - left + 1);
  }

  return max;
};

console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3 ("abc")
console.log(lengthOfLongestSubstring("bbbbb")); // Output: 1 ("b")
console.log(lengthOfLongestSubstring("pwwkew")); // Output: 3 ("wke")
console.log(lengthOfLongestSubstring("")); // Output: 0

// Given an array of positive integers and a target sum,
// find the length of the smallest contiguous subarray whose sum is greater than or equal to the target.
// If no such subarray exists, return 0.

const minSubArrayLen = (target, arr) => {
  let min = Infinity;
  let currentSum = 0;
  let left = 0;

  for (let right = 0; right < arr.length; right++) {
    currentSum += arr[right];
    while (currentSum >= target) {
      min = Math.min(min, right - left + 1);
      currentSum -= arr[left];
      left++;
    }
  }
  return min === Infinity ? 0 : min;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); // Output: 2 ([4,3] or [3,4])
console.log(minSubArrayLen(4, [1, 4, 4])); // Output: 1 ([4])
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1])); // Output: 0

// Given an array of integers and an integer k,
// find the maximum sum of any contiguous subarray of length k.

const maxSubarraySum = (arr, k) => {
  let maxSum = -Infinity;
  let left = 0;
  let currentSum = 0;

  if (arr.length < k) return null;

  for (let right = 0; right < arr.length; right++) {
    currentSum += arr[right];
    if (right - left + 1 === k) {
      maxSum = Math.max(maxSum, currentSum);
      currentSum -= arr[left];
      left++;
    }
  }
  return maxSum;
};

console.log(maxSubarraySum([2, 1, 5, 1, 3, 2], 3)); // Output: 9 ([5,1,3])
console.log(maxSubarraySum([4, 2, 1, 7, 8, 1, 2, 8, 10], 3)); // Output: 19 ([8,10,1])
console.log(maxSubarraySum([1, 2, 3], 5)); // Output: null (since k > array length)

//  Problem: Given an array where arr[i] represents the height of a vertical line, find two lines that hold the most water.

const maxArea = (arr) => {
  let max = 0;
  let j = arr.length - 1;
  let i = 0;
  let area = 0;

  while (i < j) {
    max = Math.max(max, area);
    if (arr[i] <= arr[j]) {
      area = arr[i] * (j - i);
      i++;
    } else {
      area = arr[j] * (j - i);
      j--;
    }
  }

  return max;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // Output: 49

// Given an unsorted array of integers nums,return the length of the longest continuous increasing subsequence (ie suarray). the subsequence must be strictly increasing
// Google phone interview
const longestIncreasingSubsequence = (nums) => {
  let max = 0;
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    // let j = i + 1;
    // let count = 1;

    // while (j < nums.length && nums[j - 1] < nums[j]) {
    //   count++;
    //   j++;
    //   max = Math.max(max, count);
    // }

    // More efficient solution of On
    if (i === 0 || nums[i] <= nums[i - 1]) {
      max = 1;
    } else {
      max++;
    }

    result = Math.max(max, result);
  }

  return result;
};
console.log(longestIncreasingSubsequence([1, 3, 5, 4, 7]));
console.log(longestIncreasingSubsequence([0, 1, 0, 3, 2, 3]));
console.log(longestIncreasingSubsequence([7, 7, 7, 7, 7]));
console.log(longestIncreasingSubsequence([1, 2, 3, 4, 5]));
console.log(longestIncreasingSubsequence([1, 3, 6, 7, 9, 4, 10, 5, 6]));
