//===================  Is Tree a Subtree ? =====================

// pre order traversal, once matches with value of node
// check node by node, all should match
// if not, keep traversing till you find subtree
// if not return false
// https://leetcode.com/problems/subtree-of-another-tree/submissions/

var isSubtree = function (root, subRoot) {
  if (root == null) {
    return;
  }
  // check if it matches then apply if it matches node by node
  if (compareNodeByNode(root, subRoot)) {
    return true;
  }
  let v1 = isSubtree(root.left, subRoot);
  let v2 = isSubtree(root.right, subRoot);
  if (v1 || v2) {
    return true;
  } else {
    return false;
  }
};

var compareNodeByNode = function (root1, root2) {
  if ((root1 == null) & (root2 != null) || (root1 != null) & (root2 == null)) {
    return false;
  } else {
    if (root1 == null && root2 == null) {
      return true;
    }
    if (root1.val == root2.val) {
      return (
        compareNodeByNode(root1.left, root2.left) &&
        compareNodeByNode(root1.right, root2.right)
      );
    } else {
      return false;
    }
  }
};

// ==================== Check if a given tree is symmetric ==================

// after root node, compare two trees if are they symmetric to each other
// left node of one root should match to the right node of anohter and vice versa

var isSymmetric = function (root) {
  if (root == null) {
    return;
  }
  return compareMirrorTrees(root.left, root.right);
};

var compareMirrorTrees = function (root1, root2) {
  if (root1 == null && root2 == null) {
    return true;
  }

  if (root1 != null && root2 != null) {
    if (root1.val == root2.val) {
      return (
        compareMirrorTrees(root1.left, root2.right) &&
        compareMirrorTrees(root1.right, root2.left)
      );
    } else {
      return false;
    }
  } else {
    return false;
  }
};

// ===================== Level Order traversal =================

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

//==============  Root to Leaf Path Sum=================

var hasPathSum = function (root, targetSum) {
  if (root == null && targetSum == 0) {
    return true;
  }
  return allSums(root, 0, targetSum);
};

var allSums = function (root, sumTillRoot, targetSum) {
  if (root == null) {
    return false;
  }

  sumTillRoot = sumTillRoot + root.val;

  if (root.left == null && root.right == null) {
    console.log(sumTillRoot);
    if (targetSum == sumTillRoot) {
      return true;
    } else {
      return false;
    }
  }

  if (allSums(root.left, sumTillRoot, targetSum)) {
    return true;
  } else {
    return allSums(root.right, sumTillRoot, targetSum);
  }
};

// ================ Lowsest common ancestor ======================

var lowestCommonAncestor = function (root, p, q) {
  if (root == null) {
    return;
  }

  let rootList1 = [];
  ancestors(root, p, rootList1);
  let rootList2 = [];
  ancestors(root, q, rootList2);

  let currAncestor = root;
  for (let i = 0; i < Math.min(rootList1.length, rootList2.length); i++) {
    if (rootList1[i].val == rootList2[i].val) {
      currAncestor = rootList1[i];
    } else {
      return currAncestor;
    }
  }
  return currAncestor;
};

var ancestors = function (root, p, rootsList) {
  if (root == null) {
    return false;
  }

  rootsList.push(root);
  if (root.val == p.val) {
    return true;
  }
  if (ancestors(root.left, p, rootsList)) {
    return true;
  } else {
    if (ancestors(root.right, p, rootsList)) {
      return true;
    } else {
      rootsList.pop();
      return false;
    }
  }
};
