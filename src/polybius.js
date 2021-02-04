// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    input = input.toLowerCase(); //making input lowercase right away
    const polyGrid = [
      { letter: "a", value: 11 },
      { letter: "b", value: 21 },
      { letter: "c", value: 31 },
      { letter: "d", value: 41 },
      { letter: "e", value: 51 },
      { letter: "f", value: 12 },
      { letter: "g", value: 22 },
      { letter: "h", value: 32 },
      { letter: "i", value: 42 },
      { letter: "j", value: 42 },
      { letter: "k", value: 52 },
      { letter: "l", value: 13 },
      { letter: "m", value: 23 },
      { letter: "n", value: 33 },
      { letter: "o", value: 43 },
      { letter: "p", value: 53 },
      { letter: "q", value: 14 },
      { letter: "r", value: 24 },
      { letter: "s", value: 34 },
      { letter: "t", value: 44 },
      { letter: "u", value: 54 },
      { letter: "v", value: 15 },
      { letter: "w", value: 25 },
      { letter: "x", value: 35 },
      { letter: "y", value: 45 },
      { letter: "z", value: 55 },
      { letter: " ", value: 99 }, //giving " " a value for an easier time for decoding.
    ]; //mapping the individual letters and ' ' to their proper polybius values. Space to keep the spaces in the result
    if (encode === true) {
      let encodeArray = input.split(""); //splitting letters from input to compare to polyGrid
      for (let char in encodeArray) {
        if (encodeArray[char] != " ") {
          // keeping the space when encoding, not converting to 99
          let numberValue = polyGrid.find(
            (index) => index.letter === encodeArray[char]
          );
          encodeArray[char] = numberValue.value;
        }
      }
      return encodeArray.join("");
    }
    if (encode === false) {
      let replacedSpace = input.replace(/[ ]+/g, 99); //replacing space with value for space (stackOverflow code helped)
      if (replacedSpace.length % 2 !== 0) return false; // checking to make sure strings are correct length(even)
      let pairedNum = replacedSpace.match(/\d{1,2}/g); //combining every two numbers (stackOverflow code helped, need to ask mentor how these work specifically)
      for (pair in pairedNum) {
        let foundLetter = polyGrid.find(
          (letter) => letter.value == pairedNum[pair]
        );
        if (foundLetter.letter === "i" || foundLetter.letter === "j") {
          pairedNum[pair] = "(i/j)"; //if the number matches 42, it returns "i/j"
        } else {
          pairedNum[pair] = foundLetter.letter;
        }
      }
      return pairedNum.join(""); //joining array of letters into string
    }
  }

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
