import React from "react";

const englishLetters = "abcdefghijklmnopqrstuvwxyz".split("");

type keyboardProps = {
  disabled: boolean;
  activeLetters: string[];
  inactiveLetters: string[];
  onAddGuessedLetters: (letter: string) => void;
};

const Keyboard = ({
  activeLetters,
  inactiveLetters,
  onAddGuessedLetters,
  disabled = false,
}: keyboardProps) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(50px, 1fr))",
        gap: ".25rem",
        maxWidth: "500px",
        margin: "0 auto",
      }}
    >
      {englishLetters.map((letter) => {
        const isActive = activeLetters.includes(letter);
        const isInactive = inactiveLetters.includes(letter);
        return (
          <button
            onClick={() => onAddGuessedLetters(letter)}
            key={letter}
            className={`letter ${isActive ? "active" : ""} ${
              (isInactive || disabled) ? "inactive" : ""
            }`}
            disabled={isActive || isInactive || disabled}
          >
            {letter}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;
