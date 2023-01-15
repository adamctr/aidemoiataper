import React from "react";
import key from "../key.png";

function Key({ children }) {
  return (
    <div className="relative border-5 w-14 h-14 mx-1 ">
      <img
        className=" absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
        src={key}
        alt=""
      />
      <div className="absolute text-[1.3rem] leading-5  pb-[5%] font-bold text-black left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
        {children}
      </div>
    </div>
  );
}

export default Key;
