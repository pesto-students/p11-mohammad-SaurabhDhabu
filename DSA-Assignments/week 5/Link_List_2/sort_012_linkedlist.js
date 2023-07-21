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

function PrintSpaceSeperatedStringLinkedList(head) {
  let stringLinkedList = "";
  while (head != null) {
    if (!stringLinkedList) stringLinkedList += head.val;
    else stringLinkedList = stringLinkedList + " " + head.val;
    head = head.next;
  }
  console.log(stringLinkedList);
}

function SortList(head) {
  var countList = [0, 0, 0];
  let curr = head;
  while (curr) {
    countList[curr.val] = countList[curr.val] + 1;
    curr = curr.next;
  }
  console.log(countList);
  let newHead;
  let prevNode;
  for (let i = 0; i < countList.length; i++) {
    let noNodes = countList[i];
    while (noNodes > 0) {
      let newLyCreatedNode = new ListNode(i);
      if (!newHead) {
        newHead = newLyCreatedNode;
      } else {
        prevNode.next = newLyCreatedNode;
      }
      prevNode = newLyCreatedNode;
      noNodes -= 1;
    }
  }
  return newHead;
}
var linkedListHead = CreateLinkedList("2 1 1 2 0");

var head = SortList(linkedListHead);
PrintSpaceSeperatedStringLinkedList(head);
// sample output 0 1 1 2 2

linkedListHead = CreateLinkedList("2 1 0 0 2 1 2 0");

head = SortList(linkedListHead);
PrintSpaceSeperatedStringLinkedList(head);
