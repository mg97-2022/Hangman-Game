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
    <div
      style={{
        display: "flex",
        gap: "1rem",
        margin: "2rem 0",
      }}
    >
      {chosenWord.split("").map((letter, index) => {
        return (
          <span
            key={index}
            style={{
              borderBottom: "5px solid black",
            }}
          >
            <span
              style={{
                fontSize: "4rem",
                fontWeight: "bold",
                fontFamily: "monospace",
                textTransform: "uppercase",
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
