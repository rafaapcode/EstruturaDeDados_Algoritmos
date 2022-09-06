# Árvores

- Estrutura de Dados não sequencial.
- Ótima para armazenar informações que devam ser encontradas facilmente.
- Uma árvore é constituída de nós, com relacionamento de pai-filho. Todo nó possui um pai ( exceto o primeiro ) e também zero ou mais filhos.
- O primeiro nó , ou seja, o nó que não possui pai é chamado de raiz.
  - ***Nó Interno →*** São aqueles que possuem pelo menos um filho.
  - ***Nó Externo ou Folha →*** São aqueles nós que não possuem filhos.
  - ***Ancestrais de um nó →*** O ancestral de um nó é o pai, vô, bisavô e assim por diante.
  - ***Descendentes de um nó →***  São os filhos, netos, bisnetos e assim por diante.

    ![exemploArvores](./img/Arvore.png)

- Uma subárvore é composta de um nó e seus descendentes.
- A profundidade de um nó é medida pela quantidade de ancestrais que esse nó possui, por exemplo: o nó 5 tem uma profundidade de 2, pois possui 2 ancestrais.
- As árvores também podem ser medidas em níveis, onde a raiz será o nível 0, seus filhos nível 1, seus netos nível 2 e assim sucessivamente.
- A altura de uma árvores poderá ser medida de acordo com a profundidade máxima de um nó. Nesse exemplo temos uma altura de 3, pois a maior profundidade de um nó é 3.

--------------------------------------------------------------------------------------------------------------

### Árvore Binária  e Árvore Binária de Busca

- Uma árvore binária possui no máximo 2 filhos, um a esquerda e um a direita.
- Uma árvore binária de busca ela armazena que do lado esquerdo do nó seja armazenado somente os nós com valores menores e do lado direito somente os nós com valores maiores.O diagrama acima representa uma Árvore Binária de Busca.

--------------------------------------------------------------------------------------------------------------

#### Criando uma Árvore Binária de Busca

- Trabalharemos com ponteiros para representar a conexão entre os nós. Usaremos um ponteiro para referenciar o nó à esquerda e outro para referenciar um nó à direita.
- Para fazer essa conexão usaremos a classe NODE, para fazer a criação dos nós. E utilizaremos a palavra KEY para fazer referência a um nó, pois é essa palavra que é conhecida na terminologia de árvores.

~~~javascript
  export class Node{
    constructor(key){
      this.key = key; // Valor do Nó
      this.left = null; // Valor referentes ao nó da esqueda ( nó menor )
      this.right = null; // Valor referentes ao nó da direita ( nó maior )
    };
  };
~~~

- Exemplo de uma BST(Binary Search Tree) :

  ![exemploArvores](./img/ExempoBST.png)

- Métodos que serão implementados :
  - **insert(key):** esse método insere uma nova chave na árvore.
  - **search(key):** esse método busca a chave na árvore e devolve true se
    ela existir, e false se o nó não existir.
  - **inOrderTraverse():** esse método visita todos os nós da árvore usando
    um percurso em-ordem.
  - **preOrderTraverse():** esse método visita todos os nós da árvore
    usando um percurso pré-ordem.
  - **postOrderTraverse():** esse método visita todos os nós da árvore
    usando um percurso pós-ordem.
  - **min():** esse método devolve a chave/valor mínimo da árvore.
  - **max():** esse método devolve a chave/valor máximo da árvore.
  - **remove(key):** esse método remove a chave da árvore.

- Para criar estes métodos utilizares bastante recursão.

--------------------------------------------------------------------------------------------------------------

### Inserindo uma Chave

- Temos dois casos, o primeiro é se estamos inserindo a chave na primeira posição.
- O segundo é inserir uma chave em uma posição que não seja a primeira. Para isso usaremos uma função auxiliar.

~~~javascript
  insert(key) {
    if (this.root === null) {
      this.root = new Node(key);
    }else{
      this.insertNode(this.root, key);
    };
  };
~~~

- A função insertNode nos ajudará a inserir um novo nó.

~~~javascript
  insertNode(node, key) {
    if (this.compareFn(node, key) === Compare.LESS_THAN) {
      if (node.left === null) {
        node.left = new Node(key);
      } else {
        this.insertNode(node.left, key);
      };
    } else {
      if (node.right === null) {
        node.right = new Node(key);
      } else {
        this.insertNode(node.right, key);
      };
    }
  };
~~~

--------------------------------------------------------------------------------------------------------------

### Percorrendo uma Árvore

- Percorrer uma árvore é simplesmente passar por todos os nós dela e executar executar uma operação em cada um dos nós.

##### Percurso em ordem

- Visita todos os nós da nossa árvores em ordem crescente. Podemos utilizá-lo para fazer a ordenação de uma árvore.

~~~javascript
  inOrderTraverse(callback){
    this.inOrderTraverseNode(this.root, callback);
  };


  inOrderTraverseNode(node, callback){
    if(node !== null){
      this.inOrderTraverseNode(node.left, callback);
      callback(node.key);
      this.inOrderTraverseNode(node.right, callback);
    };
  };
~~~

- Caminho que o método percorre :
  ![caminhoPercorrido](./img/MetodoInorder.png)

##### Percurso Pré-Ordem

- Visita o nó antes de visitar o seus descendentes.
- Percorre primeiro o nó raiz, depois o nó a esquerda e por  último o nó a direita.

~~~javascript
  preOrderTraverse(callback) {
    this.preOrderTraverseNode(this.root, callback);
  };

  preOrderTraverseNode(node, callback){
    if (node !== null) {
      callback(node.key);
      this.inOrderTraverseNode(node.left, callback);
      this.inOrderTraverseNode(node.right, callback);
    };
  };
~~~

- Caminho que o método percorre :
  ![caminhoPercorrido](./img/MetodoPreorder.png)

##### Percurso Pós-Ordem

- Visita um nó somente depois de visitar os seus descendentes.
- Primeiro percorrerá o nó a esquerda, depois o nó a direita e por último o nó raiz.

~~~javascript
  postOrderTraverse(callback) {
    this.postOrderTraverseNode(this.root, callback);
  };

  postOrderTraverseNode(node, callback) {
    if (node !== null) {
      this.inOrderTraverseNode(node.left, callback);
      this.inOrderTraverseNode(node.right, callback);
      callback(node.key);
    };
  };
~~~

- Caminho que o método percorre :
  ![caminhoPercorrido](./img/MetodoPosorder.png)

---------------------------------------------------------------------------------------------------------------

#### Pesquisa de Valores

- Valores mínimos e máximos:
  - Podemos perceber que sempre o nó mínimo da nossa árvores estará a esquerda no último nível. E o nó máximo a direita no último nível.
  
  ![caminhoPercorrido](./img/ExMinMAx.png)

~~~javascript
  min() {
    return this.minNode(this.root);
  };

  minNode(node) {
    let current = node;
    while (current != null && current.left != null) { 
      current = current.left; 
    };
    return current; 
  };

  max() {
    return this.maxNode(this.root); 
  };

  maxNode(node) {
    let current = node;
    while (current != null && current.right != null) { 
      current = current.right; 
    };
    return current; 
  };
~~~

--------------------------------------------------------------------------------------------------------------

#### Valor Específico

~~~javascript
  search(key) {
    return this.searchNode(this.root, key);
  };

  searchNode(node, key) {
    if (node == null) {
      return false;
    };
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {

      return this.searchNode(node.left, key);

    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {

      return this.searchNode(node.right, key);
    
    } else {
      return true;
    };
  };
~~~

--------------------------------------------------------------------------------------------------------------

#### Removendo um Nó

~~~javascript
  remove(key) {
    this.root = this.removeNode(this.root, key);
  };

  removeNode(node, key) {
    if (node == null) {
      return null;
    };
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if ( this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      node.right = this.removeNode(node.right, key);
      return node;
    } else {

      if (node.left == null && node.right == null) {
        node = null;
        return node;
      };

      if (node.left == null) {
        node = node.right;
        return node;
      } else if (node.right == null) {
        node = node.left;
        return node;
      };

      const aux = this.minNode(node.right);
      node.key = aux.key;
      node.right = this.removeNode(node.right, aux.key);
      return node;
    };
  };
~~~

- Na implementação acima estaremos encontrando a chave que estamos procurando, a partir disso teremos 3 cenários para tratar :