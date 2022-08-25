## Quicksort
- É um algoritmo melhor e mais rápido para se fazer a odernação de uma lista.
- Utiliza a técnica **DIVIDIR PARA CONQUISTAR**.

### Como funciona
- Primeiro precisamos escolher um pivô que pode ser qualquer elemento da nossa lista.
- Depois de escolher colocamos a esquerda desse elemento, um array com todos os elementos menores que ele, e a direita um array com todos os elementos maiores que ele.
- Depois para cada um dos arrays vamos fazer a mesma coisa. Escolher um pivô, colocar a esquerda os elementos menores e a direita os elementos maiores.
- vamos fazendo até que o nosso array chegue em 1 elemento apenas. Então fazemos a junção de tudo e pronto ordenamos nossa lista.
- Para melhorar o desempenho do nosso algoritmo é sempre bom escolher o pivô como um elemento do meio do array.

![figjam](./img/Figjam.png)

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Dividir para Conquistar
- Utiliza a recursão para a resolução de problemas.
- Para usar esta técnica, primeiro precisamos achar o caso-base, que seria a solução mais simples do nosso problema.
- Depois devemos diminur ou dividir o nosso problema até que ele se torne nosso caso-base. Devemos fazer isso a cada recursão.
- Quando estamos usando esta técnica com um array, na maioria das vezes o caso-base será o array vazio ou com 1 elemento.

```
function soma(arr) {
    let primeiroNumber = arr[0];


    if (arr.length == 1) {
        return primeiroNumber;
    } else {
        return primeiroNumber + soma(arr.slice(1));
    }

}

console.log(soma([10, 20, 30, 40, 50, 60, 70, 80, 90])); // 450

```

- Neste exemplo estamos fazendo a soma de um array usando DC.
1. Devemos achar o nosso caso base: O nosso caso base neste problea é quando temos somente um elemento dentro do array, pois sabemos que a soma de todos os elementos do array, seria o próprio elemento. Quando o tamanho do array for igual a 1, iremos parar a nossa recursão.
2. Devemos diminuir o nosso problema a cada recursão até que o nosso array fique com 1 elemento. Para isso estamos isolando o primeiro elemento do array, e passando como parâmetro o resto do array, assim a cada recursão estamos tirando 1 elemento até que o nosso array chegue no caso-base.

