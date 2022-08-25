function buscaMenor(arr) {
    let menorIndex;

    for (let i = 0; i < arr.length - 1; i++) {
        menorIndex = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[menorIndex]) {
                menorIndex = j;

            }
        }
        
        if (i !== menorIndex) {
            [arr[i], arr[menorIndex]] = [arr[menorIndex], arr[i]];
        }
    }

    return arr;
}

console.log(buscaMenor([5, 3, 6, 2, 10]));