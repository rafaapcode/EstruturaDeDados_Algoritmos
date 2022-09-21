const swap = (array, a, b) => [array[a], array[b]] = [array[b], array[a]];
const posRando = (i) => Math.floor(Math.random() * (i + 1));

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    swap(array, i, posRando(i));
  }

  return array;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

console.log(shuffle(arr));