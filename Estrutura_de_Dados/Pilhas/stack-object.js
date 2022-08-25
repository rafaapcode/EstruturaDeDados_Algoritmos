class Stack {
  constructor() {
    this.count = 0;
    this.items = {};
  };

  push(element) {
    this.items[this.count++] = element;
  };

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }

    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];

    return result;
  };

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  };

  isEmpty() {
    return this.count === 0;
  };

  size() {
    return this.count;
  };

  clear() {
    this.items = {};
    this.count = 0;
  };

  toString() {
    if (this.isEmpty()) {
      return '';
    };

    let objString = `${this.items[0]}`;

    for (let i = 1; i < this.count; i++) {
      objString = ` ${this.items[0]},${this.items[i]}`;
    }

    return objString;

  };

}

const pilha = new Stack();

pilha.push(5);
pilha.push(10);
pilha.push(112);
pilha.push(12);
pilha.push(30);
pilha.push(450);
pilha.push(1678);

console.log(pilha.toString());