// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// class BinaryTree {
//   constructor() {
//     this.root = null;
//   }

//   insert(value) {
//     let newNode = new Node(value);

//     if (this.root == null) {
//       this.root = newNode;
//       return;
//     }

//     this.insertNode(this.root, newNode);
//   }

//   insertNode(node, newNode) {
//     // Verificar se o valor é menor que o nó atual
//     if (newNode.value < node.value) {
//       // Verificar se o nó esquerdo é nulo
//       if (node.left == null) {
//         node.left = newNode;
//       } else {
//         // Se não for nulo, chamar recursivamente
//         this.insertNode(node.left, newNode);
//       }
//     } else {
//       // Verificar se o nó da direta é nulo
//       if (node.right == null) {
//         node.right = newNode;
//       } else {
//         // Se não for nulo, chamar recursivamente
//         this.insertNode(node.right, newNode);
//       }
//     }
//   }

//   inorderTraversal(node = this.root) {
//     if (node != null) {
//       this.inorderTraversal(node.left);
//       console.log(node.value);
//       this.inorderTraversal(node.right);
//     }
//   }

//   serach(value, node = this.root) {
//     if (node === null) return false;

//     if (value == node.value) return true;

//     if (value < node.value) {
//       return this.serach(value, node.left);
//     } else {
//       return this.serach(value, node.right);
//     }
//   }
// }

// let tree = new BinaryTree();

// tree.insert(10);
// tree.insert(5);
// tree.insert(15);
// tree.insert(3);
// tree.insert(7);
// tree.insert(12);
// tree.insert(18);
// tree.insert(1);

// tree.inorderTraversal(); // 1, 3, 5, 7, 10, 12, 15, 18
// console.log(tree.serach(7));

// Binary Search

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target){
      return mid
    }else if(arr[mid] < target){
      left = mid + 1
    }else{
      right = mid - 1
    }
  }

  return -1
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(binarySearch(arr, 20)); // Should return the index of 5 in the array
