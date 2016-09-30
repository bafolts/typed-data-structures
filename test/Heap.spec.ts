
import {Heap} from "../src/Heap";

declare var document;
declare var Mediator;

describe("Heap", () => {

    it("should know if empty", () => {
        let heap: Heap<number> = new Heap<number>();
        expect(heap.empty()).toEqual(true);
        heap.add(1);
        expect(heap.empty()).not.toEqual(true);
    });

});

