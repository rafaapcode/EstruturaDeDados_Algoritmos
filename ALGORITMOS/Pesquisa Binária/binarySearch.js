function searchBinary(lista, item) {
    let primeiro = lista[0];
    let ultimo = lista[lista.length - 1];

    while (primeiro < ultimo) {
        let meio = (primeiro + ultimo) / 2;
        let mid = Math.floor(meio);
        let chute = lista[mid];


        if (chute === item) {
            return mid;
        } else if (chute < item) {
            primeiro = mid + 1;
        } else if (chute > item) {
            ultimo = mid - 1;
        }

    }

    return -1;

}

let arr = [];

for (let i = 1; i <= 100; i++) {
    arr.push(i);
}

console.log(searchBinary(arr, 10));




