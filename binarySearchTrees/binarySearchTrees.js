const Node = (data) => {
  value = data;
  right = null;
  left = null;
  return { value, right, left };
};

const Tree = (array) => {
  const buildTree = (array, start, end) => {
    if (start > end) return null;

    let mid = parseInt((start + end) / 2);
    let node = Node(array[mid]);
    node.left = buildTree(array, start, mid - 1);
    node.right = buildTree(array, mid + 1, end);
    return node;
  };

  rootNode = buildTree(array, 0, array.length - 1);
  arrayInorder = [];
  arrayPostorder = [];
  arrayPreorder = [];

  const insertNode = (value, root = rootNode) => {
    if (root === null) {
      root = Node(value);
      return root;
    }
    if (value < root.value) {
      root.left = insertNode(value, root.left);
    } else if (value > root.value) {
      root.right = insertNode(value, root.right);
    }
    return root;
  };

  const deleteNode = (value, root = rootNode) => {
    if (root == null) return root;

    if (value < root.value) root.left = deleteNode(value, root.left);
    else if (value > root.value) root.right = deleteNode(value, root.right);
    else {
      if (root.left == null) return root.right;
      else if (root.right == null) return root.left;
      root.value = minValue(root.right);
      root.right = deleteNode(root.value, root.right);
    }
    return root;
  };

  const find = (value, root = rootNode) => {
    if (root == null || root.value == value) return root;

    if (root.value < value) return find(value, root.right);

    if (root.value > value) return find(value, root.left);
  };

  const levelOrder = () => {
    root = rootNode;
    if (root == null) return;
    const queue = [];
    const result = [];

    queue.push(root);

    while (queue.length > 0) {
      let current = queue.shift();
      result.push(current);

      if (current.left != null) queue.push(current.left);
      if (current.right != null) queue.push(current.right);
    }
    return result;
  };

  const inorder = (root) => {
    if (root == null) return;
    if (root.left != null) inorder(root.left);
    if (root.value != undefined) arrayInorder.push(root.value);
    if (root.right != null) inorder(root.right);
    return arrayInorder;
  };

  const preorder = (root) => {
    if (root == null) return;
    if (root.value != undefined) arrayPreorder.push(root.value);
    if (root.left != null) preorder(root.left);
    if (root.right != null) preorder(root.right);
    return arrayPreorder;
  };

  const postorder = (root) => {
    if (root == null) return;
    if (root.left != null) postorder(root.left);
    if (root.right != null) postorder(root.right);
    if (root.value != undefined) arrayPostorder.push(root.value);
    return arrayPostorder;
  };

  const height = (root = rootNode) => {
    if (root == null) return -1;
    else {
      let left = height(root.left);
      let right = height(root.right);
      return Math.max(left, right) + 1;
    }
  };

  const depth = (value, root = rootNode, counter = 0) => {
    if (root == null) return;
    if (value == root.value) return counter;

    if (value < root.value) return depth(value, root.left, counter + 1);
    else if (value > root.value) return depth(value, root.right, counter + 1);
  };

  const isBalanced = (root) => {
    if (root == null) return false;

    let leftHalf = root.left;
    let rightHalf = root.right;

    if (Math.abs(height(leftHalf) - height(rightHalf)) > 1) {
      return false;
    } else {
      return true;
    }
  };

  const traverse = (root, array) => {
    if (array !== undefined) array.push(root.value);
    if (root.left != null) {
      traverse(root.left, array);
    }
    if (root.right != null) {
      traverse(root.right, array);
    }
    return array;
  };

  const rebalance = () => {
    if (isBalanced(rootNode)) return rootNode;
    else {
      let arrayNewTree = [];
      arrayNewTree = traverse(rootNode, arrayNewTree);
      let newTree = Tree(arrayNewTree);
      return newTree.rootNode;
    }
  };

  return {
    insertNode,
    rootNode,
    deleteNode,
    find,
    levelOrder,
    inorder,
    postorder,
    preorder,
    height,
    depth,
    isBalanced,
    rebalance,
  };
};

const minValue = (root) => {
  let minv = root.value;
  while (root != null) {
    minv = root.value;
    root = root.left;
  }
  return minv;
};

const mergeSort = (array) => {
  if (array.length === 1) return array;
  const newArray = [];
  const leftPart = mergeSort(array.slice(0, array.length / 2));
  const rightPart = mergeSort(array.slice(array.length / 2));
  while (leftPart.length && rightPart.length) {
    if (leftPart[0] < rightPart[0]) {
      newArray.push(leftPart.shift());
    } else {
      newArray.push(rightPart.shift());
    }
  }
  return [...newArray, ...leftPart, ...rightPart];
};

const elimDuplicates = (array) => {
  return [...new Set(mergeSort(array))];
};
