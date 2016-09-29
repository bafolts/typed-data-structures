
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
		this.swap(0, 1);
		var res = this.storage.shift();
		this.sink(1);
		return res;
	}

	private sink(index: number): void {
		var check = index * 2;
		var check2 = check + 1;
		if (check < this.storage.length && this.comparator(this.storage[index], this.storage[check])) {
			this.swap(check, index);
			this.sink(check);
		} else if (check2 < this.storage.length && this.comparator(this.storage[index], this.storage[check2])) {
			this.swap(check2, index);
			this.sink(check2);
		}
	}

	private swap(index1: number, index2: number): void {
		var temp: T = this.storage[index1];
		this.storage[index1] = this.storage[index2];
		this.storage[index2] = temp;
	}

	private swim(index: number): void {
		var half = index / 2 | 0;
		if (half > 0 && this.comparator(this.storage[half], this.storage[index])) {
			this.swap(half, index);
			this.swim(half);
		}
	}

}

