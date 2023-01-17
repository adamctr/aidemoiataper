import React from "react";
import key from "../key.png";
import spacebar from "../spacebar.png";
import backspace from "../backspace.png";
import enter from "../enter.png";
import shift from "../shift.png";

export default ({ children }) => {
  const DivKey = ({ width, img, alt, children }) => {
    return (
      <div
        className={`relative inline-block align-middle mx-1 border-5 w-${width} max-md:scale-[0.8]`}
      >
        <img
          className=" absolute left-[50%] top-[50%]  translate-x-[-50%] translate-y-[-50%]"
          src={img}
          alt={alt}
        />
        <div className="absolute text-[1.3rem]   leading-5 pb-[5%] font-bold text-black left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
          {children}
        </div>
      </div>
    );
  };

  switch (children) {
    case " ":
      return (
        <DivKey
          width={28}
          img={spacebar}
          alt="Touche de clavier intitulé Barre Espace"
        ></DivKey>
      );
    case "backspace":
      return (
        <DivKey
          width={14}
          img={backspace}
          alt="Touche de clavier intitulé Effacer"
        ></DivKey>
      );
    case "shift":
      return (
        <DivKey
          width={20}
          img={shift}
          alt="Touche de clavier intitulé Majuscule (Shift)"
        ></DivKey>
      );
    case "enter":
      return (
        <DivKey
          width={14}
          img={enter}
          alt="Touche de clavier intitulé Entrer"
        ></DivKey>
      );
    default:
      return (
        <DivKey
          width={14}
          img={key}
          alt={`Touche de clavier intitulé ${children}`}
          children={children}
        ></DivKey>
      );
  }
};
