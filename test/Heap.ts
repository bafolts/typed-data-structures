
import {assert} from "chai";
import {Heap} from "../src/Heap";

describe("Heap", () => {

	it("should know if empty", () => {
		let heap: Heap<number> = new Heap<number>();
		assert.isOk(heap.empty(), "heap is empty upon creation");
	        heap.add(1);
                assert.isNotOk(heap.empty(), "heap is not empty, has one item");
	});

});

