class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(node) {
    this.children.push(node);
  }

  removeChild(value) {
    this.children = this.children.filter((child) => child.value !== value);
  }
}


class Tree{
    constructor(rootValue){
        this.root = new TreeNode(rootValue)
    }
}

const tree = new Tree('A')

const B = new TreeNode('B')
const C = new TreeNode('B')
const D = new TreeNode('B')
const E = new TreeNode('B')
const F = new TreeNode('B')
const G = new TreeNode('B')
const H = new TreeNode('B')

tree.root.addChild(B)
tree.root.addChild(C)
tree.root.addChild(D)


B.addChild(E)
B.addChild(F);

C.addChild(G);
G.addChild(H)