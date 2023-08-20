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

function ReverseLinkedList(head, k) {
  let tail = ReverseKLinkedList(head, k);
  while (tail.next) {
    var save = tail.next;
    let futhertail = ReverseKLinkedList(save, k);
    head.next = futhertail;
  }
  return tail;
}

// after first reverse get new head
// tail of reversed 3 chunk. next will be last of k chunk
function ReverseKLinkedList(head, k) {
  if (k === 1) {
    return head;
  }

  let prevChunkTail = null;
  let current = head;
  let newHead = null;

  while (current !== null) {
    let chunkStart = current;
    let prev = null;
    let count = 0;

    // Traverse the chunk of k nodes and reverse them
    while (current !== null && count < k) {
      let nextNode = current.next;
      current.next = prev;
      prev = current;
      current = nextNode;
      count++;
    }
    if (prevChunkTail !== null) {
      prevChunkTail.next = prev;
    } else {
      newHead = prev;
    }
    prevChunkTail = chunkStart;
  }

  return newHead;
}

var linkedListHead = CreateLinkedList("1 2 3 4 5 6 7 8");

var head = ReverseKLinkedList(linkedListHead, 2);
PrintLinkedList(head);
