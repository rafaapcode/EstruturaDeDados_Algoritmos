const grafos = {};

//  ["Claire", "Bob", "Penny", "Tico"] -> Vizinhos
grafos.voce = ["Claire", "Bob", "Alice"];
grafos.Bob = ["Peggy", "Anuj"];
grafos.Alice = ["Peggy"]
grafos.Claire = ["Thom", "Jonny"]
grafos.Peggy = [];
grafos.Anuj = [];
grafos.Thom = [];
grafos.Jonny = [];


function pesquisa(nome) {

    const fila = [];
    const verifyPersons = [];

    fila.unshift(...grafos[nome]);

    while (fila.length !== 0) {
        let person = fila.shift();

        if (!verifyPersons.includes(person)) {
            if (vende(person)) {
                return true;
            } else {
                fila.push(...grafos[person]);
                verifyPersons.push(person);
            }
        } else {
            return false;
        }

    }
}


console.log(pesquisa("voce"));



function vende(pessoa) {
    if (pessoa === "Thom") {
        return true;
    } else {
        return false;
    }
}

