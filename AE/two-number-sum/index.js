/* ----------------------------------
write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. if any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order. if no two numbers sum up to to the target sum, the function should return an empty array.

you can't add an integer to iteself in order to add to the target sum.

you can assume that there will be at most one pair of numbers summing up to the target sum.

------------------------------------------*/
/*----------------- TESTS--------------
TEST CASE 1
{
  "array": [3, 5, -4, 8, 11, 1, -1, 6],
  "targetSum": 10
}
TEST CASE 2
{
  "array": [4, 6],
  "targetSum": 10
}
TEST CASE 3
{
  "array": [4, 6, 1],
  "targetSum": 5
}
TEST CASE 4
{
  "array": [4, 6, 1, -3],
  "targetSum": 3
}

Test Case 5
{
  "array": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "targetSum": 17
}

Test Case 6
{
  "array": [1, 2, 3, 4, 5, 6, 7, 8, 9, 15],
  "targetSum": 18
}

Test Case 7
{
  "array": [-7, -5, -3, -1, 0, 1, 3, 5, 7],
  "targetSum": -5
}

Test Case 8
{
  "array": [-21, 301, 12, 4, 65, 56, 210, 356, 9, -47],
  "targetSum": 163
}

Test Case 9
{
  "array": [-21, 301, 12, 4, 65, 56, 210, 356, 9, -47],
  "targetSum": 164
}

Test Case 10
{
  "array": [3, 5, -4, 8, 11, 1, -1, 6],
  "targetSum": 15
}

Test Case 11
{
  "array": [14],
  "targetSum": 15
}
Test Case 12
{
  "array": [15],
  "targetSum": 15
}

*/

//SOLUTION 1
//O(n^2) time | O(1) space
//two for loops means that as the input increases you will need to iterate through each element in the each array twice. n ^ 2

function twoNumberSum(array, targetSum) {
  for (let i = 0; i < array.length; i++) {
    const firstNumber = array[i];
    for (let j = i; j < array.length; j++) {
      const secondNumber = array[j];
      if (firstNumber + secondNumber === targetSum) {
        return [firstNumber, secondNumber];
      }
    }
  }
  return [];
}

//SOLUTION 2
// O(n) time | O(n) space
//save on time complexity above because we are only traversing the array once. linear time complexity that increases with array length. accessing values in a hash and simple math do not at to time complexity.
//because we are creating a hash table than the space complexity also increases with input

function twoNumberSumTwo(array, targetSum) {
  const numbersHashTable = {};
  for (const number of array) {
    const potentialMatch = targetSum - number;
    if (potentialMatch in nums) {
      return [potentialMatch, num];
    } else {
      numbersHashTable[number] = true;
    }
  }
  return [];
}

//Solution 3 - best time complexity with large inputs
// O(nlog(n)) | O(1) space. time complexity achieved through quick sort algorithm.
//space complexity is constant because are not creating any tables or new arrays.
//

function twoNumberSumThree(array, targetSum) {
  array.sort((a, b) => a - b); //this sort runs in log(n) time
  let left = 0; //create a pointer to represent smallest value in sorted array
  let right = array.length - 1; //create pointer to represent largest vallue in sorted array
  while (left < right) {
    const currentSum = array[left] + array[right];
    if (currentSum === targetSum) {
      return [array[left], array[right]];
    } else if (currentSum < targetSum) {
      left++;
    } else if (currentSum > targetSum) {
      right--;
    }
  }
  return [];
}
