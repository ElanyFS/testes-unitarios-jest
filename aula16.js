// Stack
// Pilha:

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Stack {
//   constructor() {
//     this.top = null;
//     this.length = 0;
//   }

//   push(value) {
//     let newNode = new Node(value);

//     newNode.next = this.top;

//     this.top = newNode;

//     this.length++;
//   }

//   pop() {
//     if (!this.pop) return null;

//     this.pop = this.top.next;

//     this.pop--;
//   }

//   imprimirTop() {
//     if (!this.top) return null;

//     console.log(this.top.value);
//   }

//   vericarPilha() {
//     if (!this.top && this.length == 0) {
//       console.log("A pilha esta vazia");
//     } else {
//       console.log("A pilha não esta vazia");
//     }
//   }
// }

// let pilha = new Stack();

// pilha.push(10);

// pilha.push(15);

// pilha.push(20);

// pilha.push(25);

// pilha.imprimirTop();
// pilha.vericarPilha();

// Fila

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null; // Primeiro numero
    this.rear = null; // Ultimo numero
    this.size = 0; // tamanho da fila
  }

  // Enfileirar
  enqueue(value) {
    let newNode = new Node(value);

    // Se tem um ultimo, coloca no newNode como o proximo do atual ultimo(passa a ser o ultimo)
    if (this.rear) {
      this.rear.next = newNode;
    }

    // Se não tem um ultimo, o newNode passa a ser o ultimo
    this.rear = newNode;

    // Se não tem um primeiro, o newNode passa a ser o primeiro
    if (!this.front) {
      this.front = newNode;
    }

    this.size++;
  }

  dequeue() {
    if (!this.rear) return null;

    this.rear.next = null;

    this.rear = null
  }
}
