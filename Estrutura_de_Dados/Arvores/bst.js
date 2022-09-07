import Node from "./node.js";
import { defaultCompare, Compare } from './auxFn.js';

const BalanceFactor = {
  UNBALANCED_RIGHT: 1,
  SLIGHTLY_UNBALANCED_RIGHT: 2,
  BALANCED: 3,
  SLIGHTLY_UNBALANCED_LEFT: 4,
  UNBALANCED_LEFT: 5
};



export default class BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn;
    this.root = null;
  };

  insert(key) {
    if (this.root === null) {
      this.root = new Node(key);
    } else {
      this.insertNode(this.root, key);
    };
  };

  insertNode(node, key) {
    if (this.compareFn(node, key) === Compare.LESS_THAN) {
      if (node.left === null) {
        node.left = new Node(key);
      } else {
        this.insertNode(node.left, key);
      };
    } else {
      if (node.right === null) {
        node.right = new Node(key);
      } else {
        this.insertNode(node.right, key);
      };
    }
  };

  inOrderTraverse(callback) {
    this.inOrderTraverseNode(this.root, callback);
  };


  inOrderTraverseNode(node, callback) {
    if (node !== null) {
      this.inOrderTraverseNode(node.left, callback);
      callback(node.key);
      this.inOrderTraverseNode(node.right, callback);
    };
  };

  preOrderTraverse(callback) {
    this.preOrderTraverseNode(this.root, callback);
  };

  preOrderTraverseNode(node, callback) {
    if (node !== null) {
      callback(node.key);
      this.inOrderTraverseNode(node.left, callback);
      this.inOrderTraverseNode(node.right, callback);
    };
  };

  postOrderTraverse(callback) {
    this.postOrderTraverseNode(this.root, callback);
  };

  postOrderTraverseNode(node, callback) {
    if (node !== null) {
      this.inOrderTraverseNode(node.left, callback);
      this.inOrderTraverseNode(node.right, callback);
      callback(node.key);
    };
  };

  min() {
    return this.minNode(this.root);
  };

  minNode(node) {
    let current = node;
    while (current != null && current.left != null) {
      current = current.left;
    };
    return current;
  };

  max() {
    return this.maxNode(this.root);
  };

  maxNode(node) {
    let current = node;
    while (current != null && current.right != null) {
      current = current.right;
    };
    return current;
  };

  search(key) {
    return this.searchNode(this.root, key);
  };

  searchNode(node, key) {
    if (node == null) {
      return false;
    };
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {

      return this.searchNode(node.left, key);

    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {

      return this.searchNode(node.right, key);

    } else {
      return true;
    };
  };

  remove(key) {
    this.root = this.removeNode(this.root, key);
  };

  removeNode(node, key) {
    if (node == null) {
      return null;
    };
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      node.right = this.removeNode(node.right, key);
      return node;
    } else {

      if (node.left == null && node.right == null) {
        node = null;
        return node;
      };

      if (node.left == null) {
        node = node.right;
        return node;
      } else if (node.right == null) {
        node = node.left;
        return node;
      };

      const aux = this.minNode(node.right);
      node.key = aux.key;
      node.right = this.removeNode(node.right, aux.key);
      return node;
    };
  };

};

class AvlTree extends BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn;
    this.root = null;
  };

  getNodeHeight(node) {
    if (node == null) {
      return -1;
    };
    return Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) + 1;
  };

  getBalanceFactor(node) {
    const heightDifference = this.getNodeHeight(node.left) -
      this.getNodeHeight(node.right);
    switch (heightDifference) {
      case -2:
        return BalanceFactor.UNBALANCED_RIGHT;
      case -1:
        return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT;
      case 1:
        return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT;
      case 2:
        return BalanceFactor.UNBALANCED_LEFT;
      default:
        return BalanceFactor.BALANCED;
    };
  };

  rotationLL(node) {
    const tmp = node.left;
    node.left = tmp.right;
    tmp.right = node;
    return tmp;
  };

  rotationRR(node) {
    const tmp = node.right;
    node.right = tmp.left;
    tmp.left = node;
    return tmp;
  };

  rotationLR(node) {
    node.left = this.rotationRR(node.left);
    return this.rotationLL(node);
  };

  rotationRL(node) {
    node.right = this.rotationLL(node.right);
    return this.rotationRR(node);
  };


};