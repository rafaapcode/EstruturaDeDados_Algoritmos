# Listas Duplamente Ligadas
- Quando o nó possui tanto a referência do próximo nó quanto do nó anterior.
- Fazemos a mudança somente dos métodos insert e remove.
- Ela herdar os outros métodos todos da Lista Ligada.

### Inserindo Elementos
~~~javascript
  insert(element, index) {
        if (index >= 0 && index <= this.count) {
            const node = new DoublyNode(element);
            const current = this.head;
            if (index === 0) {
                if (this.head === null) {
                    this.head = node;
                    this.tail = node;
                } else {
                    node.next = this.head;
                    current.prev = node;
                    this.head = node;
                }

            } else if (index === this.count) {

                current = this.tail;
                current.next = node;
                node.prev = current;
                this.tail = node;

            } else {
                const previous = this.getElementAt(index - 1);
                current = previous.next;
                node.next = current;
                previous.next = node;
                current.prev = node;
                node.prev = previous;
            }

            this.count++;
            return true;
        }
        return false;
    };
~~~

- Inserindo elementos na primeira posição.

![primeirapos](./img/PrimeiraPosicao.png)

- Inserindo elemento na última posição.

![ultimaPos](./img/UltimaposicaoPosicao.png)

- Inserindo no meio da lista.

![meioLista](./img/MeioListaAdd.png)


### Removendo Elementos

~~~javascript
   removeAt(index) {
        if (index >= 0 && index < this.count) {
            let current = this.head;
            if (index === 0) {
                this.head = current.next;

                if (this.count === 1) {
                    this.tail = undefined;
                } else {
                    this.head.prev = undefined;
                }

            } else if (index === this.count - 1) {
                current = this.tail;
                this.tail = current.prev;
                this.tail.next = undefined;
            } else {
                current = this.getElementAt(index);
                const previous = current.prev;
                previous.next = current.next;
                current.next.prev = previous;
            }

            this.count--;
            return current.element;
        }

        return undefined;
    };
~~~

- Removendo primeiro elemento

![removeprimeiroelemento](./img/Removendo.png)

- Removendo da ùltima posição

![removendoúltimapos](./img/ultimoelementoremove.png)


- Removendo elemento do meio da lista.

![removendomeio](./img/RemovendoElementoMeio.png)



