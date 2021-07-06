describe("filter", () => {
    it("should remove banned words from a string",
        () => {
            assert.equal("I don't like to study not here".filter("don't", "not"), "I  like to study  here");
        });
});

describe("bubbleSort", () => {
    it("should sort an array using bubblesort",
        () => {
            assert.equal([4,7,2,0,1].bubbleSort().toString(), [0,1,2,4,7].toString());
        });
});