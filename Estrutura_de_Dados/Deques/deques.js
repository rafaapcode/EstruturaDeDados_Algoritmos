class Deque {
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }

    addFront(element) {
        if (this.isEmpty()) {
            this.addBack(element);
        } else if (this.lowestCount > 0) {
            this.lowestCount--;
            this.items[this.lowestCount] = element;
        } else {
            for (let i = this.count; i > 0; i--) {
                this.items[i] = this.items[i - 1];
            }
            this.count++;
            this.lowestCount = 0;
            this.items[0] = element;
        }
    };

    removeFront() {
        if (this.isEmpty()) return undefined;
        const element = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;

        return element;
    };

    removeBack(){
        if (this.isEmpty()) return undefined;
        const element = this.items[this.count - 1];
        delete this.items[this.count - 1];
        this.count--;

        return element;
    }

    addBack(element) {
        if (this.isEmpty()) return undefined;
        this.items[this.count] = element;
        this.count++;
    };

    size() {
        return this.count - this.lowestCount;
    }

    isEmpty() {
        return this.size() === 0;

    };

};