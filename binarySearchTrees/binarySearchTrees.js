const Node = (data) => {
  value = data;
  right = null;
  left = null;
  return { data, right, left };
};

const Tree = (array) => {
  root = null;

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

  return { buildTree };
};

const asd = [1, 2, 3, 4, 5, 6, 7];
const ass = Tree(asd);
tree = ass.buildTree(asd, 0, asd.length - 1);
console.log(tree);
