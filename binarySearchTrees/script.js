const Tree = require('./binarySearchTrees');

const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
};

let array = Array.from({ length: 5 }, () => Math.floor(Math.random() * 40));

newTree = Tree(array);
prettyPrint(newTree.rootNode);
console.log(newTree.isBalanced(newTree.rootNode));
console.log(newTree.preorder(newTree.rootNode));
console.log(newTree.inorder(newTree.rootNode));
console.log(newTree.postorder(newTree.rootNode));
newTree.insertNode(101);
newTree.insertNode(115);
newTree.insertNode(113);
prettyPrint(newTree.rootNode);
console.log(newTree.isBalanced(newTree.rootNode));
newTree.rootNode = newTree.rebalance(); //not ideal, couldnt find a better way. things just didnt work idk
prettyPrint(newTree.rootNode);
console.log(newTree.isBalanced(newTree.rootNode));
console.log(newTree.preorder(newTree.rootNode));
console.log(newTree.inorder(newTree.rootNode));
console.log(newTree.postorder(newTree.rootNode));
