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

function DeleteWithoutHead(head, val) {
  // delete head
  if (head.val == val) {
    return head.next;
  }
  let curr = head.next;
  let prev = head;
  while (curr) {
    if (curr.val == val) {
      let nextNode = curr.next;
      if (prev != null) {
        prev.next = nextNode;
      }
      return head;
    } else {
      prev = curr;
      curr = curr.next;
    }
  }
  return head;
}

var linkedListHead = CreateLinkedList("1 2 3 4 5 6 7 8");

var head = DeleteWithoutHead(linkedListHead, 6);
PrintLinkedList(head);
