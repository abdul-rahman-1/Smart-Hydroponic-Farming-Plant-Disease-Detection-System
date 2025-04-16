import React, { useState, useEffect } from "react";
import "./Loader.css"; // Assuming the CSS styles are stored here.

const Loader = () => {
  const alphabet = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "0",
    "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "{", "}", "[", "]", ":", ";", "'", "\"", "<", ">", ",", ".", "?", "/",
    "~", "`", "|", "\\"
  ];
  

  const word = "LOADING....";
  const [displayedLetters, setDisplayedLetters] = useState(word.split("").map(() => "")); // Placeholder for scrambled letters
  const [letterCount, setLetterCount] = useState(0);
  const [finished, setFinished] = useState(false);

  // Effect to control the "writing" random letters
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!finished) {
        setDisplayedLetters((prevLetters) =>
          prevLetters.map((letter, index) => {
            if (index >= letterCount) {
              const randomChar = alphabet[Math.floor(Math.random() * alphabet.length)];
              return randomChar;
            }
            return letter;
          })
        );
      }
    }, 75);

    return () => clearInterval(intervalId); // Clean up interval on unmount
  }, [letterCount, finished, alphabet]);

  // Effect to control the increment of correct letters
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (letterCount < word.length) {
        setDisplayedLetters((prevLetters) =>
          prevLetters.map((letter, index) => (index === letterCount ? word[index] : letter))
        );
        setLetterCount(letterCount + 1);
      } else {
        setFinished(true); // Set finished when all letters are revealed
        setTimeout(() => resetLoader(), 1500);
      }
    }, 400);

    return () => clearTimeout(timeoutId); // Clean up timeout on unmount
  }, [letterCount, word]);

  // Reset the loader
  const resetLoader = () => {
    setLetterCount(0);
    setFinished(false);
    setDisplayedLetters(word.split("").map(() => "")); // Reset to scrambled letters
  };

  return (
    <div id="loading">
      {displayedLetters.map((letter, index) => (
        <span key={index} className={index < letterCount ? "glowlo" : ""}>
          {letter}
        </span>
      ))}
    </div>
  );
};

export default Loader;
