// Write your tests here!
const expect = require("chai").expect;
const caesarModule = require("../src/caesar");

describe("Caesar", () => {
  it("should return false if shift equal to 0", () => {
    const expected = false;
    const actual = caesarModule("Hello World!", 0);
    expect(actual).to.equal(expected);
  });
  it("should return false if shift is greater than 25", () => {
    const expected = false;
    const actual = caesarModule("Hello World!", 32);
    expect(actual).to.equal(expected);
  });
  it("should return false if shift is less than -25", () => {
    const expected = false;
    const actual = caesarModule("Hello World!", -32);
    expect(actual).to.equal(expected);
  });
  it("should save the spaces and punctuation when encoding", () => {
    const expected = "jgnnq yqtnf!";
    const actual = caesarModule("Hello World!", 2);
    expect(actual).to.equal(expected);
  });
  it("should save the spaces and punctuation when decoding", () => {
    const expected = "hello world!";
    const actual = caesarModule("fcjjm umpjb!", -2, false);
    expect(actual).to.equal(expected);
  });
  it("should decode if set to false and the shift is known", () => {
    const expected = "hello world!";
    const actual = caesarModule("fcjjm umpjb!", -2, false);
    expect(actual).to.equal(expected);
  });
  it("should ignore uppercase letters", () => {
    const expected = "jgnnq yqtnf!";
    const actual = caesarModule("Hello World!", 2);
    expect(actual).to.equal(expected);
  });

  it("should loop over the end of the alphabet", () => {
    const expected = "c vq b!";
    const actual = caesarModule("A to Z!", 2);
    expect(actual).to.equal(expected);
  });
});
