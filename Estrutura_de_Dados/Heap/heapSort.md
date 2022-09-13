## Heap Sort

- É um algoritmos de ordenação.
- Composto de 3 passos :
    1. Primeiros iremos criar um heapMáximo com o array que desejamos ordenar.
    2. Iremos substituir o primeiro valor do heap, pelo último valor dele, diminuindo o tamanho do heap em 1.
    3. Executaremos o sift down na raíz do heap, e executaremos o segundo passo até que o tamanho do heap seje 1.

- Se quisermos ordenar o array de forma decrescente é só utilizarmos o heapMínimo.
- Criando o nosso algoritmos heapSort :

~~~javascript
  function heapSort(array, compareFn = defaultCompare) {
  let heapSize = array.length;
  buildMaxHeap(array, compareFn);
    while (heapSize > 1) {
      swap(array, 0, --heapSize);
      heapify(array, 0, heapSize, compareFn);
    };
    return array;
  };

  function buildMaxHeap(array, compareFn) {
    for (let i = Math.floor(array.length / 2); i >= 0; i--) {
      heapify(array, i, array.length, compareFn);
    };
    return array;
  };
~~~

- Lembrando que este algoritmos não é estável , isso significa que se passarmos um array ja ordenado, o algoritmo poderá mudar alguns elementos de lugar.