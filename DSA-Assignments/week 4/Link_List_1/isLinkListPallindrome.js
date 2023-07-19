class ListNode {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

function CreateLinkedList(listInputNumbers) {
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
    //console.log(head.val + " this is node " + count);
    head = head.next;
    count += 1;
  }
}

function ReverseLinkedList(head) {
  let prev;
  let current = head;
  let next;

  while (current != null) {
    //console.log(current.val);
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}

function isPalindrome(head) {
  if (!head || !head.next) {
    // Empty list or single node list is considered a palindrome
    return true;
  }
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let linkedListHead = head;
  let reversedLinkedListHead = ReverseLinkedList(slow);

  while (reversedLinkedListHead) {
    if (linkedListHead.val != reversedLinkedListHead.val) {
      return false;
    }
    linkedListHead = linkedListHead.next;
    reversedLinkedListHead = reversedLinkedListHead.next;
  }
  return true;
}

// create a linked list form comma seperated integers
var linkedListHead = CreateLinkedList([1, 2, 3, 2, 1]);
PrintLinkedList(linkedListHead);

console.log(isPalindrome(linkedListHead));
