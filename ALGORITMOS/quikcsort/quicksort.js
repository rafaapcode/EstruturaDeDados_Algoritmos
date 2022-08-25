function soma(arr) {
    let primeiroNumber = arr[0];


    if (arr.length === 1) {
        return primeiroNumber;
    } else {
        return primeiroNumber + soma(arr.slice(1));
    }

}

console.log(soma([10, 20, 30, 40, 50, 60, 70, 80, 90]));

// -------------------------------------------------------------------

function itensLista(arr) {

    if (arr.length === 1) {
        return 1;
    } else {

        return 1 + itensLista(arr.slice(1));

    }


}

let list = ["Pão", "Leite", "Bolacha", "Amendoim", "Frango", "Carne"];

console.log(itensLista(list));

// -------------------------------------------------------------------

function maxValue(arr) {

    let primeiroEl = arr[0];

    if (arr.length === 1) {
        return arr[0];
    } else {

        if (primeiroEl - arr[1] > 0) {
            return arr[0];
        }

        return maxValue(arr.slice(1));
    }
}

console.log(maxValue([998, 20, 120, 990, 991, 28, 978]));

//----------------------------------------------------------------

function quickSort(arr) {
    if (arr.length === 0) return [];
    if (arr.length === 1) return arr;

    let mid = Math.floor(arr.length / 2);

    let pivo = arr[mid];

    let menores = arr.filter(el => el < pivo);
    let maiores = arr.filter(el => el > pivo);

    return quickSort(menores).concat(pivo, quickSort(maiores));

}


console.log(quickSort([10, 5, 2, 3, 20, 9, 7, 66, 5, 90]));


//-------------------------------------------------------------------

function quickSort2(arr) {

    if (arr.length === 1) return arr;
    if (arr.length === 0) return [];

    let mid = Math.floor(arr.length / 2);

    let pivo = arr[mid];
    let menores = arr.filter(el => el < pivo);
    let maiores = arr.filter(el => el > pivo);

    return quickSort2(menores).concat(pivo, quickSort2(maiores));


}

console.log(quickSort2([10, 5, 2, 3, 100, 20, 9, 7, 66, 5, 90]));
