import React from "react";
import key from "../key.png";
import spacebar from "../spacebar.png";
import backspace from "../backspace.png";
import enter from "../enter.png";
import shift from "../shift.png";

export default ({ children }) => {
  switch (children) {
    case " ":
      return (
        <div className="relative inline-block border-5  align-middle w-28 mx-1">
          <img
            className=" absolute left-[50%] top-[50%]  translate-x-[-50%] translate-y-[-50%]"
            src={spacebar}
            alt={"Touche de clavier intitulé Barre Espace"}
          />
          <div className="absolute text-[1.3rem] leading-5  pb-[5%] font-bold text-black left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
            {children}
          </div>
        </div>
      );
    case "backspace":
      return (
        <div className="relative inline-block border-5 align-middle  w-14 h-14 mx-1">
          <img
            className=" absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
            src={backspace}
            alt={"Touche de clavier intitulé Effacer"}
          />
          <div className="absolute text-[1.3rem] leading-5  pb-[5%] font-bold text-black left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"></div>
        </div>
      );
    case "shift":
      return (
        <div className="relative inline-block border-5 align-middle  w-20 h-14 mx-1">
          <img
            className=" absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
            src={shift}
            alt={"Touche de clavier intitulé Effacer"}
          />
          <div className="absolute text-[1.3rem] leading-5  pb-[5%] font-bold text-black left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"></div>
        </div>
      );
    case "enter":
      return (
        <div className="relative inline-block border-5 align-middle  w-14 h-14 mx-1">
          <img
            className=" absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
            src={enter}
            alt={"Touche de clavier intitulé Effacer"}
          />
          <div className="absolute text-[1.3rem] leading-5  pb-[5%] font-bold text-black left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"></div>
        </div>
      );
    default:
      return (
        <div className="relative inline-block border-5 align-middle  w-14 h-14 mx-1">
          <img
            className=" absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
            src={key}
            alt={"Touche de clavier intitulé " + { children }}
          />
          <div className="absolute text-[1.3rem] leading-5  pb-[5%] font-bold text-black left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
            {children}
          </div>
        </div>
      );
  }
};
