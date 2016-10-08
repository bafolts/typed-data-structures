
export class Heap<T> {

    private storage: T[] = [undefined];

    constructor(private comparator: (item1: T, item2: T) => boolean = (item1: T, item2: T) => item1 < item2) {

    }

    public empty(): boolean {
        return this.storage.length === 1;
    }

    public add(item: T): void {
        this.storage.push(item);
        this.swim(this.storage.length - 1);
    }

    public remove(): T {
        if (this.empty()) {
            throw new Error("Empty Heap");
        }
        this.swap(1, this.storage.length - 1);
        const res = this.storage.pop();
        this.sink(1);
        return res;
    }

    private sink(index: number): void {
        let left = index << 1;
        let right = left + 1;
        let N = this.storage.length;
        while (left < N) {
            if (right < N && this.comparator(this.storage[right], this.storage[left]) && this.comparator(this.storage[right], this.storage[index])) {
                this.swap(right, index);
                index = right;
            } else if (this.comparator(this.storage[left], this.storage[index])) {
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
            if (this.comparator(this.storage[index], this.storage[half])) {
                this.swap(half, index);
                index = half;
            } else {
                break;
            }
        }
    }

}

