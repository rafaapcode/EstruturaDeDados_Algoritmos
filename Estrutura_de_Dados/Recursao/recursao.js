function recursao(i) {
    console.log(i);

    if (i === 0) {
        // Caso base
        return;
    } else {
        // Caso recursivo 
        recursao(i - 1);
    }
}

// recursao(20);

function fatorial(n) {
    if (n === 0) return 1;
    if (n === 1) {
        return n;
    } else {
        return n * fatorial(n - 1);
    }
}

// console.log(fatorial(3));

function fibo(n) {
    if (n === 0) return 1;
    if (n === 1) {
        return n;
    } else {
        return fibo(n - 1) + fibo(n - 2);
    }


}

// console.log(fibo(7));