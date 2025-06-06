// class Node {
//   constructor(valor) {
//     this.valor = valor;
//     this.proximo = null;
//     this.anterior = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null; // Primeiro elemento da lista
//   }

//   inserirInicio(v) {
//     let novo = new Node(v);
//     novo.proximo = this.head;
//     this.head = novo;
//     if (this.head) {
//       this.head.anterior = novo;
//     }
//   }

//   inserirFinal(v) {
//     let novo = new Node(v);
//     let atual = this.head;

//     if (this.head == null) {
//       this.head = novo;
//       return;
//     }

//     while (atual.proximo != null) {
//       atual = atual.proximo;
//     }

//     atual.proximo = novo;
//     novo.anterior = atual;
//   }

//   imprimirFrente() {
//     let atual = this.head;

//     let str = "";

//     while (atual) {
//       str += atual.valor + "->";
//       atual = atual.proximo;
//     }

//     str += "null";

//     console.log(str);
//   }

//   imprimirAtras() {
//     let atual = this.head;

//     let str = "";

//     while (atual) {
//       str += atual.valor + "<-";
//       atual = atual.proximo;
//     }

//     str += "null";

//     console.log(str);
//   }
// }

// let list = new LinkedList();

// list.inserirInicio(10);
// list.inserirInicio(20);
// list.inserirInicio(30);
// list.inserirFinal(5);

// list.imprimirFrente();

// list.imprimirAtras();

class Node {
  constructor(valor) {
    this.valor = valor;
    this.prev = null;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null; // Cabeca, primeiro elemento
    this.tail = null; //ultimo elemento
    this.length = 0;
  }

  inserirInicio(v) {
    let novo = new Node(v);

    if (!this.head) {
      this.head = this.tail = novo;
    } else {
      novo.next = this.head;
      this.head.prev = novo;

      this.head = novo;
    }

    this.length++;
  }

  inserirFim(v) {
    let novo = new Node(v);

    if (!this.head) {
      this.head = this.tail = novo;
    } else {
      this.tail.next = novo;
      novo.prev = this.tail;

      this.tail = novo;
    }

    this.length++;
  }

  inserirEm(indice, valor) {
    if (indice < 0 || indice > this.length)
      throw RangeError("Indice fora dos limites.");

    if (indice == 0) return this.inserirInicio(valor);
    if (indice == this.length) return this.inserirFim(valor);

    let novo = new Node(valor);

    let atual = this.head;

    for (let i = 0; i < indice; i++) {
      atual = atual.next;
    }

    let noAnterior = atual.prev;

    novo.next = atual;
    novo.prev = noAnterior;
    noAnterior.next = novo;
    atual.prev = novo;

    this.length++;
  }

  removerInicio() {
    if (!this.head) return;

    // if (indice < 0 || indice > this.length) throw RangeError('Indice fora dos limites.');

    this.head = this.head.next;

    if (this.head) {
      this.head.prev = null;
    } else {
      this.tail = null;
    }

    this.length--;
  }

  removerFim() {
    if (!this.head) return;

    this.tail = this.tail.prev;

    this.tail.next = null;

    this.length--;
  }

  removerEm(indice) {
    if (indice < 0 || indice > this.length)
      throw RangeError("Indice fora dos limites.");

    let removido;

    if (this.length == 1) {
      removido = this.head;
      this.head = this.tail = null;
    } else if (indice == 0) {
      return this.removerInicio();
    } else if (indice === this.length - 1) {
      return this.removerFim();
    } else {
      let atual = this.head;

      for (let i = 0; i < indice; i++) {
        atual = atual.next;
      }

      let noAnterior = atual.prev;
      let noProximo = atual.next;

      noAnterior.next = noProximo;
      noProximo.prev = noAnterior;
    }
    this.length--;
  }

  imprimirInicio() {
    let atual = this.head;
    let str = "";
    while (atual) {
      str += atual.valor + " -> ";
      atual = atual.next;
    }
    str += "null";

    console.log("Inicio: ", str);
  }

  imprimirFim() {
    let atual = this.tail;

    let str = "";

    while (atual) {
      str += atual.valor + "<-";
      atual = atual.prev;
    }

    str += "null";
    console.log("Fim: ", str);
  }
}

let list = new LinkedList();

list.inserirInicio(30);
list.inserirFim(5);
list.inserirInicio(15);
list.inserirInicio(20);
list.inserirFim(10);
list.inserirInicio(40);

// list.removerEm(4)
list.removerInicio();
list.removerFim();

list.imprimirInicio();
// list.imprimirFim()
