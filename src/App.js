import "./App.css";
import { useState, useEffect } from "react";
import TitleKey from "./Components/TitleKey";
import Key from "./Components/Key";

const SEPARATOR = "%%%";
const KEY_SEP = "[Touch]";

const splitKeySentence = (sentence) => sentence.split(SEPARATOR);

const showKeyTemp = (key) => `${SEPARATOR}${KEY_SEP}${key}${SEPARATOR}`;

const quotes = [
  "L'étrange créature marche dans la forêt obscure.",
  "L'océan rugit contre les rochers escarpés.",
  "L'énigmatique message est découvert sur le mur.",
  "L'arôme du café fraîchement moulu remplit la cuisine.",
  "L'escalier en colimaçon mène au sommet de la tour.",
  "Le clair de lune éclaire les toits de la ville.",
  "Le silence résonne dans la grotte sombre.",
  "La brise légère agite les feuilles des arbres.",
  "La fumée s'élève de la cheminée dans le ciel nocturne.",
  "La pluie tambourine contre les fenêtres de la maison.",
  "Le parfum des fleurs sauvages envahit l'air.",
  "Le grondement du tonnerre se fait entendre à l'horizon.",
  "La lueur des étoiles scintille dans le ciel nocturne.",
  "L'écho des pas résonne dans les rues désertes.",
  "Le bruit des vagues se brisant sur la plage est apaisant.",
  "La lumière des bougies vacille dans la pièce sombre.",
  "Le gazouillis des oiseaux accompagne le lever du soleil.",
  "La chaleur du feu de camp réchauffe les mains glacées.",
  "Le fracas des vagues contre les rochers est assourdissant.",
  "johndoe1@gmail.com",
  "jane.doe@yahoo.com",
  "michael.brown@hotmail.com",
  "sarah_johnson@outlook.com",
  "chris.wilson@aol.com",
  "emma_b@gmail.com",

  "brandon.s@gmail.com",
  "jennifer.t@yahoo.com",
  "matthew.r@hotmail.com",
  "samantha.g@outlook.com",
  "joseph.l@aol.com",

  "4, rue du Faubourg Saint-Honoré, 75008 Paris",
  "5, boulevard Saint-Germain, 75006 Paris",
  "6, place de la Concorde, 75008 Paris",
  "7, rue de Rivoli, 75001 Paris",
  "8, rue de la Paix, 75002 Paris",
  "9, avenue des Ternes, 75017 Paris",
  "10, rue de Passy, 75016 Paris",
];

const solutionsForLetter = {
  "@": `Appuyer en même temps sur les touches ${showKeyTemp(
    "Alt Gr"
  )} et ${showKeyTemp(`0 à,@`)}`,
  " ": `Appuyer sur la barre espace ${showKeyTemp(
    " "
  )}, qui est la plus  longue barre, situé tout au milieu, 
   tout en bas du clavier.`, // Barre Espace
  backspace: `Appuyer sur la touche Effacer ${showKeyTemp(
    "backspace"
  )}. Elle se trouve au dessus de la touche Entrer ${showKeyTemp("enter")}`,
  enter: `Appuyer sur la touche Entrer ${showKeyTemp(
    "enter"
  )} pour valider la saisie`,
  1: `Appuyer en même temps sur la touche Majuscule ${showKeyTemp(
    "shift"
  )} et ${showKeyTemp(`1 &`)}`,
  2: `Appuyer en même temps sur la touche Majuscule ${showKeyTemp(
    "shift"
  )} et ${showKeyTemp(`2 é,~`)}`,
  3: `Appuyer en même temps sur la touche Majuscule ${showKeyTemp(
    "shift"
  )} et ${showKeyTemp(`3 ",#`)}`,
  4: `Appuyer en même temps sur la touche Majuscule ${showKeyTemp(
    "shift"
  )} et ${showKeyTemp(`4 ',{`)}`,
  5: `Appuyer en même temps sur la touche Majuscule ${showKeyTemp(
    "shift"
  )} et ${showKeyTemp("5 (,[")}`,
  6: `Appuyer en même temps sur la touche Majuscule ${showKeyTemp(
    "shift"
  )} et ${showKeyTemp(`6 _,|`)}`,
  7: `Appuyer en même temps sur la touche Majuscule ${showKeyTemp(
    "shift"
  )} et ${showKeyTemp("7 è,`")}`,
  8: `Appuyer en même temps sur la touche Majuscule ${showKeyTemp(
    "shift"
  )} et ${showKeyTemp(`8 _,\ `)}`,
  9: `Appuyer en même temps sur la touche Majuscule ${showKeyTemp(
    "shift"
  )} et ${showKeyTemp(`9 ç,^`)}`,
  0: `Appuyer en même temps sur la touche Majuscule ${showKeyTemp(
    "shift"
  )} et ${showKeyTemp(`0 à,@`)}`,
  é: `Appuyer sur la touche ${showKeyTemp("2 é,~")}`,
  è: `Appuyer sur la touche ${showKeyTemp("7 è,`")}`,
  à: `Appuyer sur la touche ${showKeyTemp("0 à,@")}`,
  "-": `Appuyer sur la touche ${showKeyTemp("6 -,|")}`,
  _: `Appuyer sur la touche ${showKeyTemp(`8 _,\ `)}`,
  "!": `Appuyer sur la touche ${showKeyTemp(
    `§ !`
  )} qui se trouve en haut à droite de la barre espace ${showKeyTemp(" ")}`,
  "?": `Appuyer sur la touche Majuscule ${showKeyTemp(
    "shift"
  )} et ${showKeyTemp(
    "? ,"
  )} qui se trouve en haut à droite de la barre espace`,
  ".": `Appuyer sur la touche Majuscule ${showKeyTemp(
    "shift"
  )} et ${showKeyTemp(
    ". ;"
  )} qui se trouve en haut à droite de la barre espace`,
  ",": `Appuyer sur la touche ${showKeyTemp(
    "? ,"
  )} qui se trouve en haut à droite de la barre espace ${showKeyTemp(" ")}`,
  â: `Appuyer sur la touche ${showKeyTemp(
    "¨ ^"
  )} qui se trouve à gauche de la touche Entrer ${showKeyTemp(
    "enter"
  )} ensuite, appuyer sur la touche ${showKeyTemp("a")}`,
  ê: `Appuyer sur la touche ${showKeyTemp(
    "¨ ^"
  )} qui se trouve à gauche de la touche Entrer ${showKeyTemp(
    "enter"
  )} ensuite, appuyer sur la touche ${showKeyTemp("e")}`,
  î: `Appuyer sur la touche ${showKeyTemp(
    "¨ ^"
  )} qui se trouve à gauche de la touche Entrer ${showKeyTemp(
    "enter"
  )} ensuite, appuyer sur la touche ${showKeyTemp("i")}`,
  ô: `Appuyer sur la touche ${showKeyTemp(
    "¨ ^"
  )} qui se trouve à gauche de la touche Entrer ${showKeyTemp(
    "enter"
  )} ensuite, appuyer sur la touche ${showKeyTemp("o")}`,
  û: `Appuyer sur la touche ${showKeyTemp(
    "¨ ^"
  )} qui se trouve à gauche de la touche Entrer ${showKeyTemp(
    "enter"
  )} ensuite, appuyer sur la touche ${showKeyTemp("u")}`,
  "'": `Appuyer sur la touche ${showKeyTemp("'")}`,
  ç: `Appuyer sur la touche ${showKeyTemp("9 ç,^")}`,
  A: `Appuyer en même temps sur la touche Majuscule ${showKeyTemp(
    "shift"
  )} et ${showKeyTemp(`A`)}`,
  B: `Appuyer en même temps sur la touche Majuscule ${showKeyTemp(
    "shift"
  )} et ${showKeyTemp(`B`)}`,
  C: `Appuyer en même temps sur la touche Majuscule ${showKeyTemp(
    "shift"
  )} et ${showKeyTemp(`C`)}`,
  D: `Appuyer en même temps sur la touche Majuscule ${showKeyTemp(
    "shift"
  )} et ${showKeyTemp(`D`)}`,
  E: `Appuyer en même temps sur la touche Majuscule ${showKeyTemp(
    "shift"
  )} et ${showKeyTemp(`E`)}`,
  F: `Appuyer en même temps sur la touche Majuscule ${showKeyTemp(
    "shift"
  )} et ${showKeyTemp(`F`)}`,
  G: `Appuyer en même temps sur la touche Majuscule ${showKeyTemp(
    "shift"
  )} et ${showKeyTemp(`G`)}`,
  H: `Appuyer en même temps sur la touche Majuscule ${showKeyTemp(
    "shift"
  )} et ${showKeyTemp(`H`)}`,
  I: `Appuyer en même temps sur la touche Majuscule ${showKeyTemp(
    "shift"
  )} et ${showKeyTemp(`I`)}`,
  J: `Appuyer en même temps sur la touche Majuscule ${showKeyTemp(
    "shift"
  )} et ${showKeyTemp(`J`)}`,
  K: `Appuyer en même temps sur la touche Majuscule ${showKeyTemp(
    "shift"
  )} et ${showKeyTemp(`K`)}`,
  L: `Appuyer en même temps sur la touche Majuscule ${showKeyTemp(
    "shift"
  )} et ${showKeyTemp(`L`)}`,
  M: `Appuyer en même temps sur la touche Majuscule ${showKeyTemp(
    "shift"
  )} et ${showKeyTemp(`M`)}`,
  N: `Appuyer en même temps sur la touche Majuscule ${showKeyTemp(
    "shift"
  )} et ${showKeyTemp(`N`)}`,
  O: `Appuyer en même temps sur la touche Majuscule ${showKeyTemp(
    "shift"
  )} et ${showKeyTemp(`O`)}`,
  P: `Appuyer en même temps sur la touche Majuscule ${showKeyTemp(
    "shift"
  )} et ${showKeyTemp(`P`)}`,
  Q: `Appuyer en même temps sur la touche Majuscule ${showKeyTemp(
    "shift"
  )} et ${showKeyTemp(`Q`)}`,
  R: `Appuyer en même temps sur la touche Majuscule ${showKeyTemp(
    "shift"
  )} et ${showKeyTemp(`R`)}`,
  S: `Appuyer en même temps sur la touche Majuscule ${showKeyTemp(
    "shift"
  )} et ${showKeyTemp(`S`)}`,
  T: `Appuyer en même temps sur la touche Majuscule ${showKeyTemp(
    "shift"
  )} et ${showKeyTemp(`T`)}`,
  U: `Appuyer en même temps sur la touche Majuscule ${showKeyTemp(
    "shift"
  )} et ${showKeyTemp(`U`)}`,
  V: `Appuyer en même temps sur la touche Majuscule ${showKeyTemp(
    "shift"
  )} et ${showKeyTemp(`V`)}`,
  W: `Appuyer en même temps sur la touche Majuscule ${showKeyTemp(
    "shift"
  )} et ${showKeyTemp(`W`)}`,
  X: `Appuyer en même temps sur la touche Majuscule ${showKeyTemp(
    "shift"
  )} et ${showKeyTemp(`X`)}`,
  Y: `Appuyer en même temps sur la touche Majuscule ${showKeyTemp(
    "shift"
  )} et ${showKeyTemp(`Y`)}`,
  Z: `Appuyer en même temps sur la touche Majuscule ${showKeyTemp(
    "shift"
  )} et ${showKeyTemp(`Z`)}`,
};

function App() {
  const [inputValue, setInputValue] = useState("");
  const [quote, setQuote] = useState("");
  const [errorState, setErrorState] = useState(0);
  const [popupContent, setPopupContent] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);

  useEffect(() => {
    getRandomQuote();
  }, []);

  useEffect(() => {
    setPopupContent(
      `Pour écrire ${
        quote[0]
      } en majuscule, appuyer en même temps sur la touche Majuscule ${showKeyTemp(
        "shift"
      )} et ${showKeyTemp(afterLetter())}`
    );
  }, [quote]);

  useEffect(() => {
    numberOfErrors();

    // Réinitialise le délai d'expiration lorsque l'utilisateur saisit du texte
    if (timeoutId) clearTimeout(timeoutId);

    setTimeoutId(
      setTimeout(() => {
        //Si il y a du texte dans l'input et que la solution pour la lettre d'après existe
        if (inputValue !== "" && solutionsForLetter[afterLetter()]) {
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
            maxLength={quote.length}
          />
          {popupContent && (
            <div className=" mx-auto astuce rounded mt-14 w-[80vw] text-2xl max-md:text-xl p-5 bg-darkpurple text-white font-semibold">
              <div className=" font-bold px-4 py-1 rounded w-fit mb-4 bg-green">
                ASTUCE :{" "}
                {errorState ? (
                  "Effacer"
                ) : (
                  <span className="text-red-500">{afterLetter()}</span>
                )}
              </div>
              {splitKeySentence(popupContent).map((sentencePart) =>
                sentencePart.startsWith(KEY_SEP) ? (
                  <Key key={sentencePart}>
                    {sentencePart.replace(KEY_SEP, "")}
                  </Key>
                ) : (
                  sentencePart
                )
              )}
            </div>
          )}
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
