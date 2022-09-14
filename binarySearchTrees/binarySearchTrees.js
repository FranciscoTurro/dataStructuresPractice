const Node = (data) => {
  value = data;
  right = null;
  left = null;
  return { value, right, left };
};

const Tree = (array) => {
  const buildTree = (array, start, end) => {
    if (start > end) {
      return null;
    }

    let mid = parseInt((start + end) / 2);
    let node = Node(array[mid]);
    node.left = buildTree(array, start, mid - 1);
    node.right = buildTree(array, mid + 1, end);
    return node;
  };

  rootNode = buildTree(array, 0, array.length - 1);

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
    if (root == null) {
      return root;
    }
    if (value < root.value) {
      root.left = deleteNode(value, root.left);
    } else if (value > root.value) {
      root.right = deleteNode(value, root.right);
    } else {
      if (root.left == null) {
        return root.right;
      } else if (root.right == null) {
        return root.left;
      }
      root.value = minValue(root.right);
      root.right = deleteNode(root.value, root.right);
    }
  };

  const minValue = (root) => {
    let minv = root.value;
    while (root != null) {
      minv = root.value;
      root = root.left;
    }
    return minv;
  };

  return { insertNode, rootNode, deleteNode };
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

const asd = [1, 2, 3, 4, 5, 6, 7];
const ass = Tree(asd);
console.log(ass.rootNode);
ass.deleteNode(7);
console.log('after deletion');
console.log(ass.rootNode);
