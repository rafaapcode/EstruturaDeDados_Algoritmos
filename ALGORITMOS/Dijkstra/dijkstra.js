const graph = {};
const custos = {};
const pais = {};
const processados = [];


// Criação do Grafo Ponderado
graph.inicio = {};
graph.inicio.B = 2;
graph.inicio.A = 6;
graph.B = {};
graph.A = {};
graph.B.A = 3;
graph.B.fim = 5;
graph.A.fim = 1;
graph.Fim = {};

// Criação dos Custos
custos.A = 6;
custos.B = 2;
custos.fim = Infinity;

// Criação dos Pais
pais.A = "incio";
pais.B = "incio";
pais.fim = undefined;


let menorCusto = CustoMaisBaixo(custos);


while (menorCusto === undefined) {
    let custo = custos[menorCusto]; // 2
    let vizinho = graph[menorCusto]; // {"A": 3, "Fim": 1}

    if (!processados.includes(menorCusto)) {

        for (let n in Object.keys(vizinho)) {
            let novoCusto = custo + vizinho[n]; // 2 + graph.B.A =  3 / 2 + graph.B.Fim = 1  
            if (custos[n] > novoCusto) {
                custos[n] = novoCusto;
                pais[n] = menorCusto;
            }
        }

        processados.push(menorCusto);
        menorCusto = CustoMaisBaixo(custos);
    }
}




function CustoMaisBaixo(obj) {
    let custoBaixo = Infinity;
    let noDoCustoBaixo = undefined;
    for (let no in obj) {
        let custo = obj[no];
        if (custo < custoBaixo && !processados.includes(no)) {
            custoBaixo = custo;
            noDoCustoBaixo = no;
        }
    }
    return noDoCustoBaixo;
}

