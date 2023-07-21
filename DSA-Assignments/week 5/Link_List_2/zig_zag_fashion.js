class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function CreateLinkedList(stringInput) {
  var listInputNumbers = stringInput.split(" ");
  let head;
  if (listInputNumbers.length) {
    head = new ListNode(listInputNumbers[0]);
  }
  var currentNode = head;
  for (let index = 1; index < listInputNumbers.length; index++) {
    let element = listInputNumbers[index];
    let newNode = new ListNode(element);
    currentNode.next = newNode;
    currentNode = newNode;
  }
  return head;
}

function PrintLinkedList(head) {
  let count = 1;
  while (head != null) {
    console.log(head.val + " this is node " + count);
    head = head.next;
    count += 1;
  }
}

function PrintSpaceSeperatedStringLinkedList(head) {
  let stringLinkedList = "";
  while (head != null) {
    if (!stringLinkedList) stringLinkedList = head.val;
    else stringLinkedList = stringLinkedList + " " + head.val;
    head = head.next;
  }
  console.log(stringLinkedList);
}

// logic implemantation
// for even index, value should be lower than its next odd index
// when current even, if current is greater than next - swap
// when current odd, if current is small from next - swap
function CreateZigZag(head) {
  let currentIndex = 0;
  let curr = head;
  while (curr) {
    let next = curr.next;
    if (
      next &&
      ((curr.val > next.val && currentIndex % 2 == 0) ||
        (curr.val < next.val && currentIndex % 2 != 0))
    ) {
      let nextVal = next.val;
      let currVal = curr.val;
      next.val = currVal;
      curr.val = nextVal;
    }
    curr = next;
    currentIndex += 1;
  }
  return head;
}

var linkedListHead = CreateLinkedList("4 3 7 8 6 2 1");

var head = CreateZigZag(linkedListHead);

PrintSpaceSeperatedStringLinkedList(head);
//PrintLinkedList(head);
// sample output 3 7 4 8 2 6 1

linkedListHead = CreateLinkedList("1 2 3 4 5");
head = CreateZigZag(linkedListHead);

PrintSpaceSeperatedStringLinkedList(head);
// sample output 1 3 2 5 4
