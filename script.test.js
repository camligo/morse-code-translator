import { engToMorse, morseToEng } from "./script.js";

describe('Test cases for function to translate English to Morse code', () => {
  test('translates a single letter', () => {
    expect(engToMorse('A')).toBe('.-');
  });

  test('translates a word', () => {
    expect(engToMorse('hello')).toBe('.... . .-.. .-.. ---');
  });

  test('translates a sentence with spaces', () => {
    expect(engToMorse('hello world')).toBe('.... . .-.. .-.. --- / .-- --- .-. .-.. -..');
  });

  test('throws error for unknown characters', () => {
    expect(() => engToMorse('hello!')).toThrow();
    expect(() => engToMorse('12')).toThrow();
    expect(() => engToMorse('.-..')).toThrow();
  });
});

describe('Test cases for function to translate Morse code to English', () => {
  test('translates a single morse code character', () => {
    expect(morseToEng('.-')).toBe('A');
  });

  test('translates a morse code word', () => {
    expect(morseToEng('.... . .-.. .-.. ---')).toBe('HELLO');
  });

  test('translates a morse code sentence with spaces', () => {
    expect(morseToEng('.... . .-.. .-.. --- / .-- --- .-. .-.. -..')).toBe('HELLO WORLD');
  });

  test('throws error for unknown morse code characters', () => {
    expect(() => morseToEng('1')).toThrow();
    expect(() => morseToEng('abc')).toThrow();
    expect(() => morseToEng('.....')).toThrow();
  });
});
