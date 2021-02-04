// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    input = input.toLowerCase();
    if (!alphabet) return false; //making sure there is a alphabet to substitute
    if (alphabet.length !== 26) return false; //making sure the alphabet is long enough
    for (let i = 0; i < alphabet.length; i++) {
      for (let j = i + 1; j < alphabet.length; j++) {
        if (alphabet[j] === alphabet[i]) return false; //making sure the alphbet is unique
      }
    }
    const cypher = [];
    const aToZ = "abcdefghijklmnopqrstuvwxyz";
    let returnMessage = "";
    for (let i = 0; i < alphabet.length; i++) {
      let inputChar = aToZ.charAt(i);
      cypher.push({ in: inputChar, out: alphabet.charAt(i) });
    }
    if (encode === true) {
      let encodeArray = input.split("");
      for (let char in encodeArray) {
        if (encodeArray[char] != " ") {
          // keeping the space when encoding
          let numberValue = cypher.find(
            (index) => index.in === encodeArray[char]
          );
          encodeArray[char] = numberValue.out;
        }
      }
      return encodeArray.join("");
    }
    if (encode === false) { // basically the same code, just reversing the in and out values.
      let encodeArray = input.split("");
      for (let char in encodeArray) {
        if (encodeArray[char] != " ") {
          // keeping the space when decoding
          let numberValue = cypher.find(
            (index) => index.out === encodeArray[char]
          );
          encodeArray[char] = numberValue.in;
        }
      }
      return encodeArray.join("");
    }
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
