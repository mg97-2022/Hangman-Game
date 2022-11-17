import React from "react";
import KeyboardLine from "./KeyboardLine";

const firstLine = "qwertyuiop".split("");
const secondLine = "asdfghjkl".split("");
const thirdLine = "zxcvbnm".split("");

const keyboard: string[][] = [firstLine, secondLine, thirdLine];

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
    <div className='keyboard'>
      {keyboard.map((line: string[], index: number) => (
        <KeyboardLine
          key={index}
          line={line}
          inactiveLetters={inactiveLetters}
          onAddGuessedLetters={onAddGuessedLetters}
          activeLetters={activeLetters}
          disabled={disabled}
        />
      ))}
    </div>
  );
};

export default Keyboard;
