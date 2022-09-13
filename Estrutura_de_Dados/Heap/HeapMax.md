## Heap Máximo

- O maxHeap é o mesmo que o minHeap, a diferença é que quando trocamos a comparação de menor que  < por maior que >
- Para não ter que copiar tudo, podemos simplesmente herdar tudo da classe min heap.
- Começamos criando a função reverseCompare, afinal tudo será o inverso até mesmo a função de comparação.

~~~javascript
  export function reverseCompare(compareFn) {
    return (a, b) => compareFn(b, a);
  };
~~~

- Começamos a nossa classe dessa maneira :

  ~~~javascript
    constructor(compareFn = defaultCompare) {
      super(compareFn)
      this.compareFn = reverseCompare(compareFn);
    };
  ~~~

- Fazendo essa modificação nossa classe do maxHeap estará pronta :

  ~~~javascript
    export class MaxHeap extends MinHeap{
      constructor(compareFn = defaultCompare) {
        super(compareFn)
        this.compareFn = reverseCompare(compareFn);
      };
    };
  ~~~
