import "./App.css";
import { useState, useEffect } from "react";
import TitleKey from "./Components/TitleKey";
import PopUp from "./Components/PopUp";
import { showKeyTemp } from "./constants/keySep";
import { quotes } from "./constants/quotes";
import { solutionsForLetter } from "./constants/solutionsForLetter";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [quote, setQuote] = useState("");
  const [errorState, setErrorState] = useState(0);
  const [popupContent, setPopupContent] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);

  const isUpperCase = (string) => /^[A-Z]*$/.test(string);

  useEffect(() => {
    getRandomQuote();
  }, []);

  useEffect(() => {
    if (isUpperCase(quote[0])) {
      setPopupContent(
        `Pour écrire ${
          quote[0]
        } en majuscule, appuyer en même temps sur la touche Majuscule ${showKeyTemp(
          "shift"
        )} et ${showKeyTemp(afterLetter())}`
      );
    } else {
      setPopupContent(null);
    }
  }, [quote]);

  useEffect(() => {
    numberOfErrors();
    let quoteArr = quote.split("");
    let inputArr = inputValue.split("");

    // Réinitialise le délai d'expiration lorsque l'utilisateur saisit du texte
    if (timeoutId) clearTimeout(timeoutId);

    setTimeoutId(
      setTimeout(() => {
        //Si il y a du texte dans l'input et que la solution pour la lettre d'après existe
        if (
          inputValue !== "" &&
          solutionsForLetter[afterLetter()] &&
          quoteArr[inputArr.length - 1] === inputArr[inputArr.length - 1]
        ) {
          setPopupContent(solutionsForLetter[afterLetter()]);
        }
      }, 3000)
    );
  }, [inputValue]);

  const afterLetter = () => {
    const nextLetter = quote[inputValue.length];
    return nextLetter;
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);

    // Réinitialise le popup
    let quoteArr = quote.split("");
    let inputArr = inputValue.split("");
    if (
      inputArr[inputArr.length] !== quoteArr[inputArr.length] &&
      popupContent !== null
    ) {
      setPopupContent(null);
    }

    //Si l'input est complet, afficher l'astuce Entrer
    if (quote.length - 1 === inputValue.length) {
      setPopupContent(solutionsForLetter["enter"]);
    }
  };

  const numberOfErrors = () => {
    let quoteArr = quote.split("");
    let inputArr = inputValue.split("");
    let error = 0;
    inputArr.forEach((letter, index) => {
      if (letter !== quoteArr[index]) {
        error++;
        setPopupContent(solutionsForLetter["backspace"]);
      }
    });
    setErrorState(error);
  };

  const handleKeyDown = (event) => {
    // Vérifie si la touche pressée est un chiffre
    if (errorState && event.keyCode !== 8) {
      // Empêche la saisie de la touche
      event.preventDefault();
    } else if (event.key === "Backspace") {
      return true;
    }

    //Si l'input est complet, faire Entrer pour valider
    if (quote.length === inputValue.length && event.keyCode === 13) {
      getRandomQuote();
      setInputValue("");
      setPopupContent(null);
    }
  };

  const getRandomQuote = () => {
    return setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  };

  const renderQuote = () => {
    let quoteArr = quote.split("");
    let inputArr = inputValue.split("");
    return quoteArr.map((letter, index) => (
      <span
        key={index}
        className={
          letter === inputArr[index] ? "text-green-500" : "text-red-500"
        }
      >
        {letter}
      </span>
    ));
  };

  return (
    <>
      <div className="App ">
        <header className=" flex justify-center items-center h-32 max-sm:flex-col max-sm:w-[100vw] max-sm:mt-0  rounded  mx-auto bg-green p-5 text-white ">
          <h1 className="text-[2.2rem] max-sm:text-[2.3rem] text-center rounded ">
            AIDE MOI À &nbsp;
          </h1>
          <div className="flex">
            <TitleKey>T</TitleKey>
            <TitleKey>A</TitleKey>
            <TitleKey>P</TitleKey>
            <TitleKey>E</TitleKey>
            <TitleKey>R</TitleKey>
          </div>
        </header>
        <main className="flex mt-16 items-center h-[100vh] flex-col ">
          <div>
            <p className="text-4xl max-sm:text-[1.7rem] p-5 font-semibold  text-center bg-white rounded">
              {renderQuote()}
            </p>
          </div>
          <input
            className="border p-5 mt-14 w-[90vw] max-sm:text-[1.5rem] text-4xl rounded border-black  bg-white"
            placeholder="Veuillez recopier la citation ci-dessus"
            type="text"
            value={inputValue}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            maxLength={quote.length}
          />
          <PopUp
            afterLetter={afterLetter}
            errorState={errorState}
            popupContent={popupContent}
          ></PopUp>
        </main>
        <footer className="bg-green text-darkpurple flex p-5 justify-center items-center">
          Copyright ©2022 Aide moi à taper. Tous droits réservés. Créé par Adam
          Courtaro |
        </footer>
      </div>
    </>
  );
}

export default App;
