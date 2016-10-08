
import {expect} from "chai";
import {Heap} from "../src/Heap";

describe("Heap", () => {

    it("should know if empty", () => {
        let heap: Heap<number> = new Heap<number>();
        expect(heap.empty()).to.be.true;
        heap.add(1);
        expect(heap.empty()).to.be.false;
    });

    it("should remove properly", () => {
        let heap: Heap<number> = new Heap<number>();
        let a = [3, 6, 2, 9, 5, 8, 7, 0, 1];
        for (let i = 0; i < a.length; i++) {
            heap.add(a[i]);
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
    });

});

