const expect = require("chai").expect;
const substitutionModule = require("../src/substitution");

describe("Substitution", () => {
  it("should return false if the alphabet is not 26 characters long", () => {
    const expected = false;
    const actual = substitutionModule("message", "plmoknijuhvygctfxrdzeswaq");
    expect(actual).to.equal(expected);
  });
  it("should return the correct phrase after encoding", () => {
    const expected = "jkvvc scxvo";
    const actual = substitutionModule(
      "Hello World",
      "plmoknijbuhvygctfxrdzeswaq"
    );
    expect(actual).to.equal(expected);
  });
  it("should return false if there are non unique characters in the alphabet", () => {
    const expected = false;
    const actual = substitutionModule(
      "Hello World",
      "plpoknijbuhvygctfxrdzeswaq"
    );
    expect(actual).to.equal(expected);
  });
  it("should maintain spaces after encoding", () => {
    const expected = "jkvvc scxvo";
    const actual = substitutionModule(
      "Hello World",
      "plmoknijbuhvygctfxrdzeswaq"
    );
    expect(actual).to.equal(expected);
  });
  it("should maintain spaces after decoding", () => {
    const expected = "hello world";
    const actual = substitutionModule(
      "jkvvc scxvo",
      "plmoknijbuhvygctfxrdzeswaq",
      false
    );
    expect(actual).to.equal(expected);
  });
  it("should ignore capital letters", () => {
    const expected = "caps lock off";
    const input1 = substitutionModule(
      "CAPS LOCK OFF",
      "plmoknijbuhvygctfxrdzeswaq"
    );
    const actual = substitutionModule(
      input1,
      "plmoknijbuhvygctfxrdzeswaq",
      false
    );
    expect(actual).to.equal(expected);
  });
});
