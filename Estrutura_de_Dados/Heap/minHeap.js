import { defaultCompare, Compare } from "./auxFn";

export default class MinHeap {
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn;
    this.heap = [];
  };

  getLeft(index) {
    return 2 * index + 1;
  };

  getRight(index) {
    return 2 * index + 2;
  };

  getParentIndex(index) {
    if (index === 0) undefined;

    return Math.floor((index - 1) / 2);
  };

  insert(value) {
    if (value !== null) {
      this.heap.push(value);
      this.siftUp(this.heap.length - 1);
      return true;
    };

    return false;

  };

  siftUp(index) {
    let parent = this.getParentIndex(index);

    while (index > 0 && this.compareFn(this.heap[parent], this.heap[index] >= Compare.BIGGER_THAN)) {
      swap(this.heap, parent, index);
      index = parent;
      parent = this.getParentIndex(index);
    };
  };

  swap(arr, a, b) {
    return [arr[a], arr[b]] = [arr[b], arr[a]];
  };

  size() {
    return this.heap.length;
  };

  isEmpty() {
    return this.size() === 0;
  };

  findMinimum() {
    return this.isEmpty() ? undefined : this.heap[0];
  };

  extract() {
    if (this.isEmpty()) undefined;
    if (this.size() === 1) this.heap.shift();

    const removedElement = this.heap.shift();
    this.siftDown(0);
    return removedElement;
  };

  siftDown(index) {
    let element = index;
    const left = this.getLeft(index);
    const right = this.getRight(index);
    const size = this.size();

    if (left < size &&
      this.compareFn(this.heap[element], this.heap[left]) > Compare.BIGGER_THAN) {
      element = left;
    };

    if ( right < size && this.compareFn(this.heap[element], this.heap[right]) > Compare.BIGGER_THAN) { 
      element = right; 
    };

    if (index !== element) {
      swap(this.heap, index, element); 
      this.siftDown(element); 
    };
  };

};