// function contarAteZero(n) {
//   if (n == 0) {
//     console.log("Acabou");
//     return;
//   }

//   console.log(n);
//   contarAteZero(n - 1);
// }

// contarAteZero(10)

class TreeNode {
  constructor(valor) {
    this.value = valor;
    this.children = [];
  }

  addChildren(childNode) {
    this.children.push(childNode);
  }

  removeChildren(childNode) {
    this.children = this.children.filter((node) => node.value !== childNode);
  }

  search(childNode) {
    let result = this.children.filter((node) => node.value === childNode);

    console.log(result);
  }
}

class Tree {
  constructor(rootValue) {
    this.root = new TreeNode(rootValue);
  }

  traverseDFS(callback) {
    function recurse(node) {
      callback(node);

      node.children.forEach((child) => {
        recurse(child);
      });
    }

    recurse(this.root);
  }

  traverseDFS2(callback) {
    function recurse(node, level) {
      callback(node, level);

      node.children.forEach((child) => 
        recurse(child, level + 1)
      );
    }

    recurse(this.root, 0)
  }

  printTree(node = this.root, pref = '', folha = true){
    console.log(pref + (folha ? '└──':'├──') + node.value);

    const qtd = node.children.length;

    node.children.forEach((child, index) => {
        const ultimoFilho = index == qtd - 1;;
        const newPref = pref + (folha ? '    ' : '|')
        this.printTree(child, newPref, ultimoFilho)
    })
  }
}

function imprimir(node) {
  console.log(node.value);
}

function imprimirArvore(node, pref) {
  console.log(' '.repeat(pref * 2) + '|--', node.value);
}

const tree = new Tree("A");

const nodeB = new TreeNode("B");
const nodeC = new TreeNode("C");
const nodeD = new TreeNode("D");
const nodeE = new TreeNode("E");
const nodeF = new TreeNode("F");
const nodeG = new TreeNode("G");
const nodeH = new TreeNode("H");

tree.root.addChildren(nodeB);
tree.root.addChildren(nodeC);
tree.root.addChildren(nodeD);

nodeB.addChildren(nodeE);
nodeB.addChildren(nodeF);

nodeC.addChildren(nodeG);
nodeG.addChildren(nodeH);

// tree.traverseDFS(imprimir);

// tree.traverseDFS2(imprimirArvore);

tree.printTree()
