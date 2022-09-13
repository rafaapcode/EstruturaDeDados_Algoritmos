import { defaultCompare, Compare, reverseCompare } from "./auxFn";
import MinHeap from "./minHeap";

export class MaxHeap extends MinHeap {
  constructor(compareFn = defaultCompare) {
    super(compareFn)
    this.compareFn = reverseCompare(compareFn);
  };

  heapSort(array, compareFn = defaultCompare) {
    let heapSize = array.length;
    buildMaxHeap(array, compareFn);
    while (heapSize > 1) {
      this.swap(array, 0, --heapSize);
      heapify(array, 0, heapSize, compareFn);
    };
    return array;
  };

  buildMaxHeap(array, compareFn) {
    for (let i = Math.floor(array.length / 2); i >= 0; i--) {
      heapify(array, i, array.length, compareFn);
    };
    return array;
  };

};