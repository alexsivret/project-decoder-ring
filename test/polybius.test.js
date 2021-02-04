const expect = require("chai").expect;
const polybiusModule = require("../src/polybius");

describe("Polybius", () => {
  it("should encode both i and j into 42", () => {
    const expected = "42 113341 42";
    const actual = polybiusModule("I and J");
    expect(actual).to.equal(expected);
  });
  it("should decode both 42 into 'i/j'", () => {
    const expected = "(i/j) and (i/j)";
    const actual = polybiusModule("42 113341 42", false);
    expect(actual).to.equal(expected);
  });
  it("should make everything lowercase", () => {
    const expected = "caps lock off";
    const output1 = polybiusModule("CAPS LOCK OFF");
    const actual = polybiusModule(output1, false);
    expect(actual).to.equal(expected);
  });
  it("should keep spaces when encoding", () => {
    const expected = "22421551 2351 34432351 345311315134 531351113451";
    const actual = polybiusModule("Give me some spaces please");
    expect(actual).to.equal(expected);
  });
  it("should keep spaces when decoding", () => {
    const expected = "g(i/j)ve me some spaces please";
    const actual = polybiusModule(
      "22421551 2351 34432351 345311315134 531351113451",
      false
    );
    expect(actual).to.equal(expected);
  });
});
