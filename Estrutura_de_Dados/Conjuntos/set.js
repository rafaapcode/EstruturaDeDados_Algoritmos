class Conjunto {
  constructor() {
    this.itens = {};
  };

  has(element) {
    return Object.prototype.hasOwnProperty.call(this.itens, element);
  };

  add(element) {
    if (!this.has(element)) {
      this.itens[element] = element;
      return true;
    };

    return false;
  };

  delete(element) {
    if (this.has(element)) {
      delete this.itens[element];
      return true;
    };

    return false;
  };

  clear() {
    this.itens = {};
  };

  size() {
    return Object.keys(this.itens).length;
  };

  values() {
    return Object.values(this.itens);
  };

  union(otherSet) {
    const newSet = new Conjunto();

    this.values().forEach(val => newSet.add(val));
    otherSet.values().forEach(val => newSet.add(val));

    return newSet;
  };

  intersection(otherSet) {
    const intersectionSet = new Conjunto();
    const newset = otherSet.values();
    const set = this.values();

    if (newset.length < set.length) {

      for (let val of newset) {
        if (set.has(val)) {
          intersectionSet.add(val);
        };
      };

      return intersectionSet;

    } else {

      for (let val of set) {
        if (otherSet.has(val)) {
          intersectionSet.add(val);
        };
      };

      return intersectionSet;
    };
  };

  difference(otherset) {
    const diffSet = new Conjunto();

    this.values().forEach(val => {

      if (!otherset.has(val)) {
        diffSet.add(val);
      };

    });

    return diffSet;

  };

  isSubsetOf(otherSet) {
    if (this.size() > otherSet.size()) {
      return false;
    };

    let isSubset = true;

    this.values().every(val => {
      if (!otherSet.has(val)) {
        isSubset = false;
        return false;
      };

      return true;
    });

    return isSubset;
  };

};