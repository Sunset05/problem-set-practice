/*Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

Example:

solution(1000); // should return 'M'
Help:

Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000
Remember that there can't be more than 3 identical symbols in a row.
*/

//my solution with recursion
const romanMatrix = [
  [1000, "M"],
  [900, "CM"],
  [500, "D"],
  [400, "CD"],
  [100, "C"],
  [90, "XC"],
  [50, "L"],
  [40, "XL"],
  [10, "X"],
  [9, "IX"],
  [5, "V"],
  [4, "IV"],
  [1, "I"],
];
function romanEncoder(number) {
  //define base case
  if (number === 0) {
    return "";
  }
  // loop that compares number passed to romanMatrix index and records the roman numeral, then decrements the original number and calls itself to run the same operation until the number is 0. returns empy string at that point and exits recursive loop
  for (let i = 0; i < romanMatrix.length; i++) {
    if (number >= romanMatrix[i][0]) {
      return romanMatrix[i][1] + romanEncoder(number - romanMatrix[i][0]);
    }
  }
}
