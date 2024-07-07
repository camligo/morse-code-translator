import { engToMorse, morseToEng } from "./script.js";

const displayError = (message) => {
  alert(message);
}
// English to Morse code
const btnEng = document.getElementById('btnEng');

btnEng.addEventListener('click', (e) => {
  e.preventDefault();
  const input = document.getElementById('engInput');
  const inputValue = input.value.trim();
  const results = document.getElementById('morseResult');

  try {
    const translatedText = engToMorse(inputValue);
    results.value = translatedText;
  } catch (error) {
    displayError(error.message);
    results.value = '';
  }
});

// Morse code to English
const btnMorse = document.getElementById('btnMorse');

btnMorse.addEventListener('click', (e) => {
  e.preventDefault();
  const input = document.getElementById('morseInput');
  const inputValue = input.value.trim();
  const results = document.getElementById('engResult');

  try {
    const translatedMorse = morseToEng(inputValue);
    results.value = translatedMorse;
  } catch (error) {
    displayError(error.message);
    results.value = '';
  }
})

// copy text result
async function copyToClipboard(text) {
  try {
    if (navigator?.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
    }
  } catch (error) {
    console.warn(error.message);
  }
}

// copy Morse code
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
