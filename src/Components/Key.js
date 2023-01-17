import React from "react";
import key from "../key.png";
import spacebar from "../spacebar.png";
import backspace from "../backspace.png";
import enter from "../enter.png";
import shift from "../shift.png";

const DivKey = ({ width, img, alt, children }) => {
  const responsiveWidthValues = (width) => {
    switch (width) {
      case 28:
        return 16;
      case 20:
        return 14;
      case 14:
        return 10;
    }
  };
  return (
    <div
      className={`relative inline-block border-5 w-${width} max-md:w-${responsiveWidthValues(
        width
      )} align-middle mx-1`}
    >
      <img
        className=" absolute left-[50%] top-[50%]  translate-x-[-50%] translate-y-[-50%]"
        src={img}
        alt={alt}
      />
      <div className="absolute text-[1.3rem] max-md:text-[1rem] max-md:leading-4 leading-5 pb-[5%] font-bold text-black left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
        {children}
      </div>
    </div>
  );
};

export default ({ children }) => {
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
          width="14"
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
          alt={"Touche de clavier intitulé " + { children }}
          children={children}
        ></DivKey>
      );
  }
};
