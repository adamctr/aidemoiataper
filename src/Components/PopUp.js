import React from "react";
import Astuce from "./Astuce";
import {
  SEPARATOR,
  KEY_SEP,
  splitKeySentence,
  showKeyTemp,
} from "../constants/keySep";
import Key from "./Key";

const PopUp = ({ popupContent, afterLetter, errorState }) => {
  return (
    <>
      {popupContent && (
        <div className=" mx-auto astuce rounded mt-14 w-[80vw] text-2xl leading-[3rem] max-md:leading-[2.2rem] max-md:text-xl p-5 bg-darkpurple text-white font-semibold">
          <Astuce afterLetter={afterLetter} errorState={errorState}></Astuce>
          {splitKeySentence(popupContent).map((sentencePart) =>
            sentencePart.startsWith(KEY_SEP) ? (
              <Key key={sentencePart}>{sentencePart.replace(KEY_SEP, "")}</Key>
            ) : (
              sentencePart
            )
          )}
        </div>
      )}
    </>
  );
};

export default PopUp;
