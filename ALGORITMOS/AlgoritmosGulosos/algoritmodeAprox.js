let estadosAbranger = new Set(["mt", "wa", "or", "id", "nv", "ut", "ca", "az"]);
let estacoes = {};
let estacoesFinal = new Set();

estacoes.kum = new Set(["id", "nv", "ut"]);;
estacoes.kdois = new Set(["wa", "id", "mt"]);
estacoes.ktres = new Set(["or", "nv", "ca"]);
estacoes.kquatro = new Set(["nv", "ut"]);
estacoes.kcinco = new Set(["ca", "az"]);



while (estadosAbranger) {
    let melhorEstacao = undefined;
    let estadosCobertos = new Set();

    for (let estados in estacoes) {
        let cobertos = interseccao(estadosAbranger, estacoes[estados]);
        if (cobertos.size > estadosCobertos.size) {
            melhorEstacao = estados;
            estadosCobertos = cobertos;
        }
    }
    estadosAbranger -= estadosCobertos;
    estacoesFinal.add(melhorEstacao);
}

function interseccao(seta, setb) {
    const intersection = new Set();
    for (let item of seta) {
        if (setb.has(item)) {
            intersection.add(item);
        }
    }

    return intersection;
}