import { Node } from "./node";
import { equals } from "./equals";

class DoublyNode extends Node {
    constructor(element, next, prev) {
        super(element, next);
        this.prev = prev;
    };
}

class LinkedList {
    constructor(equal = equals) {
        this.count = 0;
        this.head = undefined;
        this.equalFn = equal;
    };

    push(element) {
        const node = new Node(element);
        let current;
        if (this.head === null) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next !== null) {
                current = current.next;
            };

            current.next = node;
        }

        this.count++;
    };

    removeAt(index) {
        if (index >= 0 && index < this.count) {
            let current = this.head;
            if (index === 0) {
                this.head = current.next;
            } else {
                let previous = this.getElementAt(index - 1);
                current = previous.next;
                previous.next = current.next;
            }

            this.count--;
            return current.element;
        }

        return undefined;
    };

    getElementAt(index) {
        if (index >= 0 && index <= this.count) {
            let current = this.head;
            for (let i = 0; i < index && current !== null; i++) {
                current = current.next;
            }

            return current;
        }

        return undefined;
    };

    insert(element, index) {
        if (index >= 0 && index <= this.count) {
            const node = new Node(element);
            if (index === 0) {
                const current = this.head;
                current.next = current;
                this.head = node;
            } else {
                const previous = this.getElementAt(index - 1);
                const current = previous.next;
                node.next = current;
                previous.next = node;
            }

            this.count++;
            return true;
        }
        return false;
    };

    indexOf(element) {
        const current = this.head;
        for (let i = 0; i < this.count && current !== null; i++) {
            if (this.equalFn(element, current.element)) {
                return i;
            }
            current = current.next;
        }
        return -1;
    };

    remove(element) {
        const index = this.indexOf(element);
        return this.removeAt(index);
    };

    size() {
        return this.count;
    };

    isEmpty() {
        return this.count === 0;
    };

    getHead() {
        return this.head;
    };

    toString() {
        if (this.head === null) {
            return '';
        };

        let objString = `${this.head.element}`;
        let current = this.head.next;

        for (let i = 0; i < this.size(); i++) {
            objString = `${objString}, ${current.element}`;
            current = current.next;
        };

        return objString;
    };
};

class DoublyLinkedList extends LinkedList {
    constructor(equal = equals) {
        super(equal);
        this.tail = undefined;
    };

    insert(element, index) {
        if (index >= 0 && index <= this.count) {
            const node = new DoublyNode(element);
            const current = this.head;
            if (index === 0) {
                if (this.head === null) {
                    this.head = node;
                    this.tail = node;
                } else {
                    node.next = this.head;
                    current.prev = node;
                    this.head = node;
                }

            } else if (index === this.count) {

                current = this.tail;
                current.next = node;
                node.prev = current;
                this.tail = node;

            } else {
                const previous = this.getElementAt(index - 1);
                current = previous.next;
                node.next = current;
                previous.next = node;
                current.prev = node;
                node.prev = previous;
            }

            this.count++;
            return true;
        }
        return false;
    };

    removeAt(index) {
        if (index >= 0 && index < this.count) {
            let current = this.head;
            if (index === 0) {
                this.head = current.next;

                if (this.count === 1) {
                    this.tail = undefined;
                } else {
                    this.head.prev = undefined;
                }

            } else if (index === this.count - 1) {
                current = this.tail;
                this.tail = current.prev;
                this.tail.next = undefined;
            } else {
                current = this.getElementAt(index);
                const previous = current.prev;
                previous.next = current.next;
                current.next.prev = previous;
            }

            this.count--;
            return current.element;
        }

        return undefined;
    };

};

class CircularLinkedList extends LinkedList {
    constructor(equal = equals) {
        super(equal);
    };

    insert(element, index) {
        if (index >= 0 && index <= this.count) {
            const node = new Node(element);
            let current = this.head;
            if (index === 0) {

                if (this.head === null) {
                    this.head = node;
                    node.next = this.head;
                } else {
                    node.next = current;
                    current = this.getElementAt(this.size());
                    this.head = node;
                    current.next = this.head;
                }
            }

            this.count++;
            return true;
        }
        return false;
    };

    removeAt(index) {
        if (index >= 0 && index < this.count) {
            let current = this.head;
            if (index === 0) {

                if (this.size() === 1) {
                    this.head = undefined;
                } else {
                    const removed = this.head;
                    current = this.getElementAt(this.size());
                    this.head = this.head.next;
                    current.next = this.head;
                    current = removed;
                }
            } else {
                let previous = this.getElementAt(index - 1);
                current = previous.next;
                previous.next = current.next;
            }

            this.count--;
            return current.element;
        }

        return undefined;
    };
}