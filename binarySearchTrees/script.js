const Tree = require('./binarySearchTrees');

let array = Array.from({ length: 5 }, () => Math.floor(Math.random() * 40));

newTree = Tree(array);
console.log('Tree balanced: ' + newTree.isBalanced());
console.log('Preorder: ' + newTree.preorder());
console.log('Inorder: ' + newTree.inorder());
console.log('Postorder: ' + newTree.postorder());
newTree.insertNode(101);
newTree.insertNode(115);
newTree.insertNode(113);
console.log('Tree balanced: ' + newTree.isBalanced());
newTree.rebalance(); //not ideal, couldnt find a better way. things just didnt work idk
console.log('Tree balanced: ' + newTree.isBalanced());
console.log('Preorder: ' + newTree.preorder());
console.log('Inorder: ' + newTree.inorder());
console.log('Postorder: ' + newTree.postorder());
