import { useEffect, useState } from "react";
import GuessedWord from "./components/GuessedWord";
import HangmanDraw from "./components/HangmanDraw";
import Keyboard from "./components/Keyboard";
import words from "./wordList.json";

function getNewWord() {
  const chosenWordIndex = Math.floor(Math.random() * words.length);

  return words[chosenWordIndex];
}

function App() {
  const [wordToGuess, setWordToGuess] = useState(getNewWord);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectGuessedLetters = guessedLetters.filter(
    (letter: string) => !wordToGuess.includes(letter)
  );

  const isLoser = incorrectGuessedLetters.length >= 6;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const guessedLettersHandler = (letter: string) => {
    if (guessedLetters.includes(letter)) return;
    setGuessedLetters((prev) => [...prev, letter]);
  };

  useEffect(() => {
    const keyPressHandler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;
      e.preventDefault();
      guessedLettersHandler(key);
    };

    document.addEventListener("keypress", keyPressHandler);

    return () => {
      document.removeEventListener("keypress", keyPressHandler);
    };
  }, [guessedLetters]);

  useEffect(() => {
    const keyPressHandler = (e: KeyboardEvent) => {
      const key = e.key;
      if (key !== "Enter") return;
      e.preventDefault();
      setGuessedLetters([]);
      setWordToGuess(getNewWord());
    };

    document.addEventListener("keypress", keyPressHandler);

    return () => {
      document.removeEventListener("keypress", keyPressHandler);
    };
  }, [guessedLetters]);

  return (
    <div
      style={{
        maxWidth: "800px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "0 auto",
        padding: "1rem",
      }}
    >
      <div
        style={{
          fontSize: "1.5rem",
          textTransform: "capitalize",
          marginBottom: "2rem",
        }}
      >
        {isWinner && "winner! - refresh to try again"}
        {isLoser && "nice try - refresh to try again"}
      </div>
      <HangmanDraw incorrectLettersNumber={incorrectGuessedLetters.length} />
      <GuessedWord
        reveal={isLoser || isWinner}
        GuessedLetter={guessedLetters}
        chosenWord={wordToGuess}
      />
      <div
        style={{
          alignSelf: "stretch",
        }}
      >
        <Keyboard
          disabled={isWinner || isLoser}
          activeLetters={guessedLetters.filter((letter) =>
            wordToGuess.includes(letter)
          )}
          inactiveLetters={incorrectGuessedLetters}
          onAddGuessedLetters={guessedLettersHandler}
        />
      </div>
    </div>
  );
}

export default App;
