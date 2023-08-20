// theory
// to delete, delete from the root node
// if has to delete from middle, then replace root with to be deleted and heapify
// to insert, insert at leaf node at end then heapify for max or min heap

// bottom up approach to heapify
var findKthLargest = function (array, k) {
  let minHeapArray = new Array();
  for (let i = 0; i < k; i++) {
    buildMinHeap(minHeapArray, array[i]);
  }

  console.log(minHeapArray);
  for (let i = k; i < array.length; i++) {
    if (array[i] > minHeapArray[0]) {
      minHeapArray[0] = array[i];
      minHeappifyDown(minHeapArray, k, 0);
    }
  }
  return minHeapArray[0];
};

function minHeappifyUp(heapArray, indexJ) {
  let parentIndex = Math.floor((indexJ - 1) / 2);
  if (heapArray[parentIndex] > heapArray[indexJ]) {
    const current = heapArray[indexJ];
    heapArray[indexJ] = heapArray[parentIndex];
    heapArray[parentIndex] = current;
    minHeappifyUp(heapArray, parentIndex);
  }
}

function minHeappifyDown(heapArray, n, i) {
  if (i > n) {
    return;
  }
  let l = 2 * i + 1;
  let r = 2 * i + 2;
  let smallest = i;
  if (l < n && heapArray[l] < heapArray[smallest]) {
    smallest = l;
  }
  if (r < n && heapArray[r] < heapArray[smallest]) {
    smallest = r;
  }
  if (smallest != i) {
    const minElement = heapArray[smallest];
    heapArray[smallest] = heapArray[i];
    heapArray[i] = minElement;
    minHeappifyDown(heapArray, n, smallest);
  }
}

function buildMinHeap(heapArray, element) {
  let leafIndex = heapArray.length;
  heapArray.push(element);
  minHeappifyUp(heapArray, leafIndex);
  //console.log(heapArray);
}
//const input = prompt("Enter the array elements separated by commas: ");
const input = "20,10,25,5,15";
const elements = input.split(",").map(Number);
const k = 3;
const result = findKthLargest(elements, k);
console.log(result);
