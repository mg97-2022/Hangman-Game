import { Fragment, useCallback, useEffect, useState } from "react";
import GuessedWord from "./components/GuessedWord";
import HangmanDraw from "./components/HangmanDraw";
import Keyboard from "./components/Keyboard/Keyboard";
import words from "./wordList.json";
// import {soundplay} from './components/Sound'
import img2 from "./assets/forest-cemetery-pumpkin-horror-wallpaper-preview (1).jpg";
import img from "./assets/109093189-hanged-man-on-halloween.jpg.webp";

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

  const guessedLettersHandler = useCallback(
    (letter: string) => {
      // soundplay()
      if (guessedLetters.includes(letter)) return;
      setGuessedLetters((prev) => [...prev, letter]);
    },
    [guessedLetters]
  );
  useEffect(() => {
    const keyPressHandler = (e: KeyboardEvent) => {
      const key = e.key;
      // if (wordToGuess.includes(key)) {
      //   soundplay()
      // } else {
      //   soundplay()
      // }
      if (!key.match(/^[a-z]$/)) return;
      e.preventDefault();
      guessedLettersHandler(key);
    };

    document.addEventListener("keypress", keyPressHandler);

    return () => {
      document.removeEventListener("keypress", keyPressHandler);
    };
  }, [guessedLetters, guessedLettersHandler]);

  const startAgainHandler = () => {
    setGuessedLetters([]);
    setWordToGuess(getNewWord());
  };

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
    <Fragment>
      <img className="img" src={img} alt="" />
      <div className="mainDiv">
        <p className="stateText">
          {isWinner && "winner! - refresh to try again"}
          {isLoser && "nice try - refresh to try again"}
        </p>
        <HangmanDraw incorrectLettersNumber={incorrectGuessedLetters.length} />
        <GuessedWord
          reveal={isLoser || isWinner}
          GuessedLetter={guessedLetters}
          chosenWord={wordToGuess}
        />
        <div>
          {isLoser || isWinner ? (
            <button onClick={startAgainHandler} className="button">
              try again
            </button>
          ) : null}

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
    </Fragment>
  );
}

export default App;
