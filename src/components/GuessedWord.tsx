import React from "react";

type guessedWordProps = {
  reveal: boolean;
  chosenWord: string;
  GuessedLetter: string[];
};

const GuessedWord: React.FC<guessedWordProps> = ({
  chosenWord,
  GuessedLetter,
  reveal = false,
}) => {
  return (
    <div className="guessedWordContainer">
      {chosenWord.split("").map((letter, index) => {
        return (
          <span key={index} className="letterCont">
            <span
              className="letter"
              style={{
                color:
                  !GuessedLetter.includes(letter) && reveal ? "red" : "black",
                visibility:
                  GuessedLetter.includes(letter) || reveal
                    ? "visible"
                    : "hidden",
              }}
            >
              {letter}
            </span>
          </span>
        );
      })}
    </div>
  );
};

export default GuessedWord;
