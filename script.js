import { morseCode } from "./data.js";

export const engToMorse = (str) => {
  return str.toUpperCase().split("").map((char) => {
    if (char === " ") {
      return "/";
    }
    if (!morseCode.hasOwnProperty(char)) {
      throw new Error(`${char} is not a valid character`);
    }
    return morseCode[char];
  }).join(" ");
};

export const morseToEng = (str) => {
	const swappedObj = Object.fromEntries(Object.entries(morseCode).map((char) => char.reverse())); // switch keys and values

  return str.split(" ").map((char) => {
    if (char === "/") {
      return " ";
    }
    if (!swappedObj.hasOwnProperty(char)) {
      throw new Error(`${char} is not a valid Morse code character`)
    }
    return swappedObj[char];
  }).join("");
};
