class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function BuildBinaryTree(listNodes) {
  const queue = [];
  let root = null;

  for (let index = 0; index < listNodes.length; index++) {
    if (listNodes[index]) {
      let newNode = new TreeNode(parseInt(listNodes[index]));

      if (root == null) {
        root = newNode;
      } else {
        let front = queue[0];
        if (front.left == null) {
          front.left = newNode;
        } else {
          front.right = newNode;
          queue.shift();
        }
      }
      queue.push(newNode);
    } else {
      queue.shift();
    }
  }

  return root;
}

function printBinaryTreeInOrderTraversal(head) {
  if (head == null) {
    return;
  }
  printBinaryTreeInOrderTraversal(head.left);
  console.log(head.val);
  printBinaryTreeInOrderTraversal(head.right);
}

function printBinaryTreePreOrderTraversal(head) {
  if (head == null) {
    return;
  }

  console.log(head.val);
  printBinaryTreePreOrderTraversal(head.left);
  printBinaryTreePreOrderTraversal(head.right);
}

function printLevelOrderTraversal(root) {
  if (!root) {
    return;
  }

  const queue = [];
  queue.push(root);

  while (queue.length > 0) {
    const node = queue.shift();
    console.log(node.val);

    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
}

// printBinaryTreeInOrderTraversal(root);
// console.log("____ Pre order traversal___");
// printBinaryTreePreOrderTraversal(root);
// console.log("____ level order traversal___");
// printLevelOrderTraversal(root);

// ================ calculate height of binary tree =================
// Write a function to calculate the height of a binary tree.
// give a array so first store that array in binary tree
// 3 9 20 null null 15 7

function heightOfTree(root, currentHeight) {
  if (root == null) {
    return 0;
  }
  currentHeight =
    1 +
    Math.max(
      heightOfTree(root.left, currentHeight),
      heightOfTree(root.right, currentHeight)
    );
  return currentHeight;
}

//console.log(heightOfTree(root, 0));
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// ========== count number of leaf nodes in binary tree =========
// Logic steps - if both the left and right nodes are null then will be leaf nodes
let leafNodes = [];
function numberOfLeafNodes(root) {
  if (root == null) {
    return 0;
  }
  if (root.left == null && root.right == null) {
    leafNodes.push(root.val);
    return 1;
  }
  return numberOfLeafNodes(root.left) + numberOfLeafNodes(root.right);
}

//console.log(numberOfLeafNodes(root, 0));
//console.log(leafNodes);

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// =====================[invert binary tree]=========================

var invertTree = function (root) {
  invertTreeDiagram(root);
  return root;
};

var invertTreeDiagram = function (root) {
  if (root == null) {
    return;
  }

  let rightNode = root.right;
  let leftNode = root.left;

  root.right = leftNode;
  root.left = rightNode;

  invertTree(leftNode);
  invertTree(rightNode);
};
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// =====================[merge binary tree]=========================
var mergeTrees = function (root1, root2) {
  if (root1 && root2) {
    let newRoot = new TreeNode(root1.val + root2.val);
    newRoot.left = mergeTrees(root1.left, root2.left);
    newRoot.right = mergeTrees(root1.right, root2.right);
    return newRoot;
  } else if (root1 && !root2) {
    return root1;
  } else if (!root1 && root2) {
    return root2;
  } else if (!root1 && !root2) {
    return null;
  }
};
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// =====================[serialise binary tree]=========================
