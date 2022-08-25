class HashTable {
    constructor() {
        this.table = new Array(127);
        this.size = 0;
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.table.length;
    }

    set(key, value) {
        const index = this._hash(key);
        this.table[index] = [key, value];
        this.size++;
    }

    get(key) {
        const target = this._hash(key);
        return this.table[target];
    }

    remove(key) {
        const index = this._hash(key);

        if (this.table[index] && this.table[index].length) {
            this.table[index] = [];
            this.size--;
            return true;
        } else {
            return false;
        }
    }
}

let hTable = new Map();

hTable.set("Maçã", 0.67);
hTable.set("Leite", 1.49);
hTable.set("Abacate", 1.49);



console.log(hTable);



const hashTable = {};

hashTable.ovo = "1.50";
hashTable.amaciante = "20.00";
hashTable["maçã"] = "5.50";



const listaTelefonica = {};

listaTelefonica.Rafael = "911224899";
listaTelefonica.Rute = "970876879";
listaTelefonica.Joana = "9802736656";


console.log(listaTelefonica.Rafael);

// -------------------------------------------------
const votaram = {};



function voto(nome) {

    if (votaram.hasOwnProperty(nome)) {
        return "Ja votou";
    } else {
        votaram[nome] = true;
        return "Pode votar";
    }
}

console.log(voto("Rafael")); // Pode votar
console.log(voto("Joana")); // Pode votar
console.log(voto("Joana")); // Ja votou
console.log(voto("Rafael")); // Ja votou


