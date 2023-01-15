import "./App.css";
import { useState, useEffect, useRef } from "react";
import TitleKey from "./Components/TitleKey";
import Key from "./Components/Key";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [quote, setQuote] = useState("");
  const [errorState, setErrorState] = useState(0);
  const [popupContent, setPopupContent] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);

  const solutionsForLetter = {
    "@": "Appuyer en même temps sur la touche Alt Gr et 0.", // @
    " ": "Appuyer sur la barre espace, qui est la plus {<Key>Alt Gr</Key>} grande barre, toute en longueur, situé tout au milieu, tout en bas du clavier.", // Barre Espace
  };

  useEffect(() => {
    getRandomQuote();
  }, []);

  useEffect(() => {
    numberOfErrors();

    // Réinitialise le délai d'expiration lorsque l'utilisateur saisit du texte
    if (timeoutId) clearTimeout(timeoutId);

    setTimeoutId(
      setTimeout(() => {
        if (inputValue !== "") {
          setPopupContent(solutionsForLetter[afterLetter()]);
        }
      }, 3000)
    );
  }, [inputValue]);

  const afterLetter = () => {
    const nextLetter = quote[inputValue.length];
    console.log("[afterLetter] nextLetter", nextLetter);
    return nextLetter;
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);

    // Si la lettre tapée est la valeur attendue et que popupContent !== null, faire setPopupContent(null)
    let quoteArr = quote.split("");
    let inputArr = inputValue.split("");
    if (
      inputArr[inputArr.length] !== quoteArr[inputArr.length] &&
      popupContent !== null
    ) {
      setPopupContent(null);
    }
    if (quote.length - 1 === inputValue.length) {
      getRandomQuote();
      setInputValue("");
    }
  };

  const numberOfErrors = () => {
    let quoteArr = quote.split("");
    let inputArr = inputValue.split("");
    let error = 0;
    inputArr.forEach((letter, index) => {
      if (letter !== quoteArr[index]) {
        error++;
      }
    });
    setErrorState(error);
  };

  const handleKeyDown = (event) => {
    // Vérifie si la touche pressée est un chiffre
    if (errorState >= 1 && event.keyCode !== 8) {
      // Empêche la saisie de la touche
      event.preventDefault();
    } else if (event.key === "Backspace") {
      return true;
    }
  };

  const quotes = [
    "Le succès n'est pas final, l'échec n'est pas fatal : c'est le courage qui compte.",
    "L'échec est un tournant vers la réussite.",
    "Il n'y a pas de succès sans échec.",
    "L'échec est une opportunité de recommencer avec plus d'expérience.",
    "Chaque échec est un atout pour la prochaine réussite.",
  ];

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
      <div className="App h-[100vh] ">
        <header className=" flex justify-center items-center h-32 max-sm:flex-col max-sm:w-[100vw] max-sm:mt-0 mt-5 rounded w-[90vw] mx-auto bg-green p-5 text-white ">
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
        <main className="flex mt-16 items-center h-[60vh] flex-col ">
          <div>
            <p className="text-4xl max-sm:text-[1.8rem] p-5 font-semibold  text-center bg-white rounded">
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
          />
          {popupContent && (
            <div className=" mx-auto rounded mt-14 w-[80vw] text-2xl p-5 bg-darkpurple text-white font-semibold">
              <div className="font-bold px-4 py-1 rounded w-fit mb-4 bg-green">
                ASTUCE :
              </div>
              {popupContent}
            </div>
          )}
        </main>
      </div>

      <footer className="bg-green text-darkpurple flex p-5 justify-center items-center">
        Copyright ©2022 Aide moi à taper. Tous droits réservés. Créé par Adam
        Courtaro |
      </footer>
    </>
  );
}

export default App;
