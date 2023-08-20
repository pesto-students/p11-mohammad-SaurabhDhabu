function isMinHeap(heapArray) {
  let len = heapArray.length;
  for (let i = 0; i < len; i++) {
    if (
      (2 * i + 1 < len && heapArray[i] > heapArray[2 * i + 1]) ||
      (2 * i + 2 < len && heapArray[i] > heapArray[2 * i + 2])
    ) {
      return false;
    }
  }
  return true;
}

//const input = prompt("Enter the array elements separated by commas: ");
const input = "20,10,25,5,15";
const elements = input.split(",").map(Number);
const result = isMinHeap(elements);
console.log(result);
