function sortedSquaredArray(array) {
  const sortedSquares = new Array(array.length).fill(0);
  let leftPointer = 0;
  let rightPointer = array.length - 1;

  for (let idx = array.length - 1; idx >= 0; idx--) {
    const smallerValue = array[leftPointer];
    const largerValue = array[rightPointer];

    if (Math.abs(smallerValue) > Math.abs(largerValue)) {
      sortedSquares[idx] = smallerValue * smallerValue;
      leftPointer++;
    } else {
      sortedSquares[idx] = largerValue * largerValue;
      rightPointer--;
    }
  }
  return sortedSquares;
}
