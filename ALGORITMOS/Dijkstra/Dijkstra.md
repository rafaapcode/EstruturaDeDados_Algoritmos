## Algoritmo de Dijkstra
- É um algoritmo que utilizar grafos ponderados.
- Diferentemente do algoritmo de Pesquisa em Largura, o Dijkstra ele acha o caminho mais **RÁPIDO** entre um ponto e outro e *NÃO* o menor caminho entre um ponto e outro.
- Este algoritmo não funciona em grafos **NÃO DIRECIONADOS**.
- Os 'Pesos' das arestas dos grafos não podem ser negativo, para que esse algortimo funcione. Só funciona com os 'pesos' das arestas positivos.

### Como Funciona
1. Encontre o Vértice mais 'barato', este é o vértice que você consegue chegar no menor tempo possível.
2. Atualize o custo do vizinho deste vértice.
3. Repita até fazer para todos os vértices.
