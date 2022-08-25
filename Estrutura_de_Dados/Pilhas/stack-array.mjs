class Stack {
  constructor(){
    this.items = [];
  };

  push(element){
    this.items.push(element);
  };

  pop(){
    return this.items.pop();
  };

  peek(){
    return this.items[this.items.length - 1];
  };

  isEmpty(){
    return this.items.length === 0;
  };

  size(){
    return this.items.length;
  };

  clear(){
    this.items = [];
  };



}

function decimalToBinary(decimal) {
  const pilha = new Stack();
  let number = decimal;
  let resto;
  let binaryString = "";
  while (number > 0) {
    resto = Math.floor(number % 2);
    pilha.push(resto);
    number = Math.floor(number / 2);
  };
  while (!pilha.isEmpty()) {
    binaryString += pilha.pop().toString();
  }

  return binaryString;
}

console.log(decimalToBinary(10));