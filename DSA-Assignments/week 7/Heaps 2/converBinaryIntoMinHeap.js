// convert binary tree into min heap
// binary tree, left node, less than parent and right node greater than parent
// do inorder traversal, keep arranging it in heap

const convertBinaryIntoHeap = function (rootOfBinaryTree) {
  // do inorder traversal will give a list in increasing order
  // if not null keep putting in array of heap
  let heapArray = [];
  inOrderTraversal(rootOfBinaryTree, heapArray);
  return heapArray;
};

const inOrderTraversal = function (currentNode, heapArray) {
  if (currentNode == null) {
    return;
  }

  inOrderTraversal(currentNode.left);
  heapArray.push(currentNode.val);
  inOrderTraversal(currentNode.right);
};
