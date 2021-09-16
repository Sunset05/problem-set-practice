/*breakdown 
  first check for empty string, if so immediately return an empty array

  then make sure that the string has an even number of characters, if it doesn't at an underscore on the end

  regex time. use .match to look for any two characters globalle, and seperate them into their own element in the resulting array. return that value.
*/
function solution(str) {
  if (str.length === 0) {
    return [];
  }
  const forcedEvenString = str.length % 2 ? str + "_" : str;

  return forcedEvenString.match(/../g);
}

/* OTHER POSSIBLE SOLUTIONS
  function solution(str){
  var i = 0;
  var result = new Array();
  if (str.length % 2 !== 0) {
    str = str + '_';
  }
  while (i < str.length) {
      result.push(str[i] + str[i+1]);
      i += 2;
    }
  return result;
}

if the string is odd add an underscore. while i is less than str.length add str[i] and str[i+1] to the result array as one element and increment i by two to avoid duplicate values

function solution(s){
   return (s+"_").match(/.{2}/g)||[]
}
add an underscore to any string given and run a regex match for two . characters in a row - 2 of any character - globally. if that is a falsy value return an empty array

*/
