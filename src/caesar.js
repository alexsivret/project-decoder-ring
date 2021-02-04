// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if (shift == 0 || shift > 25 || shift < -25) return false; //ending function if shift is too large or too small
    const lowerCase = input.toLowerCase(); //changing input to lower case to make encoding/decoding easier
    const encodedMessage = [];
    //making array of all letters 3 times to wrap around either way
    const alphabet =
      "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
    if (encode == false) {
      shift = shift * -1;
    }

    for (let i = 0; i < lowerCase.length; i++) {
      let indexChar = lowerCase.charAt(i);
      if (!alphabet.includes(indexChar)) {
        //if the input includes spaces or punctuation, this adds in the correct position
        encodedMessage.push(indexChar);
      } else {
        for (let j = 0; j < alphabet.length; j++) {
          let offset = j + 26 + shift;
          if (alphabet.charAt(j) === indexChar) {
            encodedMessage.push(alphabet.charAt(offset));
            break;
          }
        }
      }
    }

    return encodedMessage.join("");
  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
