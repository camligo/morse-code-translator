import { morseCode } from "./data.js";


const engToMorse = (str) => {
  return str.toUpperCase().split("").map((char) => {
    if (char === " ") {
      return " / "; // handles spaces between words
    }
    return morseCode[char] || "";
  }).join(" ");
};

const morseToEng = (str) => {
	const swappedObj = Object.fromEntries(Object.entries(morseCode).map((char) => char.reverse())); // switch keys and values

  return str.split(" ").map((char) => {
    if (char === "/") {
      return " ";
    }
    return swappedObj[char];
  }).join("");
}

const btnEng = document.getElementById('btnEng');

// English to morse code
btnEng.addEventListener('click', (e) => {
  e.preventDefault();
  const input = document.getElementById('engInput');
  const inputValue = input.value.trim();
  const results = document.getElementById('morseResult');


  const translatedText = engToMorse(inputValue);
  results.value = translatedText;
})

// Morse code to English
const btnMorse = document.getElementById('btnMorse');

btnMorse.addEventListener('click', (e) => {
  e.preventDefault();
  const input = document.getElementById('morseInput');
  const inputValue = input.value.trim();
  const results = document.getElementById('engResult');

  const translatedMorse = morseToEng(inputValue);
  results.value = translatedMorse;
})

// Copy text result
async function copyToClipboard(text) {
  try {
    if (navigator?.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
    }
  } catch (error) {
    console.error(error);
  }
}

// Copy morse code
const btnCopy = document.querySelectorAll('.btn-copy');

btnCopy.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();

    const morseResult = document.getElementById('morseResult');
    const engResult = document.getElementById('engResult');

    if (btn === document.getElementById('morseCopy')) {
      copyToClipboard(morseResult.value)
    } else {
      copyToClipboard(engResult.value)
    }
    alert('Copied!')
  })
})
