
import {Comparator} from "./Comparator";

export class BinaryHeap<T> {

    private storage: T[] = [undefined];
    private isMinHeap: boolean = true;
    private capacity: number = Number.MAX_VALUE;
    private comparator: Comparator<T> = {
        compare: (item1: T, item2: T): number => <any>item1 - <any>item2,
    };

    /**
     * Constructs a new minimum binary heap.
     */
    constructor();

    /**
     * Constructs a new minimum or maximum binary heap.
     */
    constructor(isMinHeap: boolean);

    /**
     * Constructs a new BinaryHeap.
     */
    constructor(isMinHeap: boolean, comparator: Comparator<T>);

    /**
     * Constructs a new BinaryHeap that will use the given comparator to order it's elements.
     */
    constructor(comparator: Comparator<T>);

    /**
     * Constructs a new minimum binary heap with the specified initial capacity.
     */
    constructor(capacity: number);

    /**
     * Constructs a new minimum or maximum binary heap with the specified initial capacity.
     */
    constructor(capacity: number, isMinHeap: boolean);

    /**
     * Constructs a new BinaryHeap.
     */
    constructor(capacity: number, isMinHeap: boolean, comparator: Comparator<T>);

    /**
     * Constructs a new BinaryHeap.
     */
    constructor(capacity: number, comparator: Comparator<T>);
    constructor(firstArg?: boolean | number | Comparator<T>, secondArg?: boolean | Comparator<T>, thirdArg?: Comparator<T>) {
        if (typeof firstArg === "boolean") {
            this.isMinHeap = firstArg;
            if (typeof secondArg !== "undefined") {
                this.comparator = <Comparator<T>>secondArg;
            }
        } else if (typeof firstArg === "number") {
            this.capacity = firstArg;
            if (typeof secondArg !== "undefined") {
                if (typeof secondArg === "boolean") {
                    this.isMinHeap = secondArg;
                    if (typeof thirdArg !== "undefined") {
                        this.comparator = thirdArg;
                    }
                } else {
                    this.comparator = secondArg;
                }
            }
        } else if (typeof firstArg !== "undefined") {
            this.comparator = firstArg;
        }
    }

    /**
     * Clears all elements from queue.
     */
    public clear(): void {
        this.storage.splice(1);
    }

    /**
     * Returns the element on top of heap but don't remove it.
     */
    public peek(): T {
        if (this.isEmpty()) {
            throw new Error("Heap is empty.");
        }
        return this.storage[1];
    }

    /**
     * Tests if queue is empty.
     */
    public isEmpty(): boolean {
        return this.storage.length === 1;
    }

    /**
     * Tests if queue is full.
     */
    public isFull(): boolean {
        return this.storage.length - 1 === this.capacity;
    }

    /**
     * Inserts an element into queue.
     */
    public insert(item: T): void {
        if (this.isFull()) {
            throw new Error("Heap is full");
        }
        this.storage.push(item);
        this.swim(this.storage.length - 1);
    }

    /**
     * Removes the priority element.
     */
    public remove(): T {
        if (this.isEmpty()) {
            throw new Error("Empty Heap");
        }
        this.swap(1, this.storage.length - 1);
        const res = this.storage.pop();
        this.sink(1);
        return res;
    }

    /**
     * Returns the number of elements in this heap.
     */
    public size(): number {
        return this.storage.length - 1;
    }

    private compare(index1: number, index2: number): boolean {
        let result = this.comparator.compare(this.storage[index1], this.storage[index2]);
        if (this.isMinHeap) {
            return result < 0;
        } else {
            return result > 0;
        }
    }

    private sink(index: number): void {
        let left = index << 1;
        let right = left + 1;
        let N = this.storage.length;
        while (left < N) {
            if (right < N && this.compare(right, left) && this.compare(right, index)) {
                this.swap(right, index);
                index = right;
            } else if (this.compare(left, index)) {
                this.swap(left, index);
                index = left;
            } else {
                break;
            }
            left = index << 1;
        }
    }

    private swap(index1: number, index2: number): void {
        const temp: T = this.storage[index1];
        this.storage[index1] = this.storage[index2];
        this.storage[index2] = temp;
    }

    private swim(index: number): void {
        while (index > 1) {
            let half = index >> 1;
            if (this.compare(index, half)) {
                this.swap(half, index);
                index = half;
            } else {
                break;
            }
        }
    }

}

