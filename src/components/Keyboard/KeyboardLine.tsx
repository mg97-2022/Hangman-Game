import React from "react";

type keyboardProps = {
  line: string[];
  disabled: boolean;
  activeLetters: string[];
  inactiveLetters: string[];
  onAddGuessedLetters: (letter: string) => void;
};

function KeyboardLine({
  line,
  disabled,
  activeLetters,
  inactiveLetters,
  onAddGuessedLetters,
}: keyboardProps) {
  return (
    <div className='line'>
      {line.map((letter: string) => {
        const isActive = activeLetters.includes(letter);
        const isInactive = inactiveLetters.includes(letter);
        return (
          <button
            onClick={() => onAddGuessedLetters(letter)}
            key={letter}
            className={`letter ${isActive ? "active" : ""} ${
              isInactive || disabled ? "inactive" : ""
            }`}
            disabled={isActive || isInactive || disabled}
          >
            {letter}
          </button>
        );
      })}
    </div>
  );
}

export default KeyboardLine;
