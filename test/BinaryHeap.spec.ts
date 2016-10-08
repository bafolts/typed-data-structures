
import {expect} from "chai";
import {BinaryHeap} from "../src/BinaryHeap";
import {Comparator} from "../src/Comparator";

describe("BinaryHeap", () => {

    it("should know if empty", () => {
        let heap: BinaryHeap<number> = new BinaryHeap<number>();
        expect(heap.isEmpty()).to.be.true;
        heap.insert(1);
        expect(heap.isEmpty()).to.be.false;
    });

    it("should remove properly", () => {
        let heap: BinaryHeap<number> = new BinaryHeap<number>();
        let a = [3, 6, 2, 9, 5, 8, 7, 0, 1];
        for (let i = 0; i < a.length; i++) {
            heap.insert(a[i]);
        }
        expect(heap.remove()).to.equal(0);
        expect(heap.remove()).to.equal(1);
        expect(heap.remove()).to.equal(2);
        expect(heap.remove()).to.equal(3);
        expect(heap.remove()).to.equal(5);
        expect(heap.remove()).to.equal(6);
        expect(heap.remove()).to.equal(7);
        expect(heap.remove()).to.equal(8);
        expect(heap.remove()).to.equal(9);
        expect(heap.remove.bind(heap)).to.throw(Error);
        expect(heap.size()).to.equal(0);
    });

    it("should have capacity", () => {
        let heap: BinaryHeap<number> = new BinaryHeap<number>(0);
        expect(heap.insert.bind(heap, 1)).to.throw(Error);
        heap = new BinaryHeap<number>(1);
        heap.insert(1);
        expect(heap.insert.bind(heap, 1)).to.throw(Error);
        expect(heap.peek()).to.equal(1);
        expect(heap.remove()).to.equal(1);
        expect(heap.peek.bind(heap)).to.throw(Error);
        heap.insert(1);
        heap.clear();
        expect(heap.size()).to.equal(0);
    });

    it("should use capacity and max", () => {
        let heap: BinaryHeap<number> = new BinaryHeap<number>(2, false);
        heap.insert(1);
        heap.insert(2);
        expect(heap.peek()).to.equal(2);
    });

    it("should use max", () => {
        let heap: BinaryHeap<number> = new BinaryHeap<number>(false);
        heap.insert(1);
        heap.insert(10);
        expect(heap.peek()).to.equal(10);
    });

    it("should use comparator", () => {
        const maxComparator: Comparator<number> = {
            compare: (item1: number, item2: number): number => {
                return item2 - item1;
            }
        };
        let heap: BinaryHeap<number> = new BinaryHeap<number>(maxComparator);
        heap.insert(1);
        heap.insert(2);
        expect(heap.peek()).to.equal(2);
        heap = new BinaryHeap<number>(true, maxComparator);
        heap.insert(1);
        heap.insert(2);
        expect(heap.peek()).to.equal(2);
        heap = new BinaryHeap<number>(2, true, maxComparator);
        heap.insert(1);
        heap.insert(2);
        expect(heap.peek()).to.equal(2);
        heap = new BinaryHeap<number>(2, maxComparator);
        heap.insert(1);
        heap.insert(2);
        expect(heap.peek()).to.equal(2);
    });

});

