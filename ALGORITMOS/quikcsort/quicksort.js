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
