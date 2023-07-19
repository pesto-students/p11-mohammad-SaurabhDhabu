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

function removeDuplicates(head) {
  if (!head || !head.next) {
    return head;
  }

  let set = new Set();
  let prev = null;
  let curr = head;

  while (curr) {
    if (set.has(curr.val)) {
      prev.next = curr.next;
    } else {
      set.add(curr.val);
      prev = curr;
    }

    curr = curr.next;
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

var linkedListHead = CreateLinkedList("1 2 3 4");

var head = removeDuplicates(linkedListHead);
PrintLinkedList(head);
