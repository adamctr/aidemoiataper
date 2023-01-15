import React from "react";
import key from "../key.png";

function Key({ children }) {
  return (
    <div className="relative border-5 w-20 h-20 max-md:w-14 max-md:h-14 max-sm:w-12 max-sm:h-12 mx-1 ">
      <img
        className=" absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
        src={key}
        alt=""
      />
      <div className="absolute text-[3rem] max-md:text-[2rem] max-sm:text-[1.5rem]  pb-[5%] font-bold  text-black left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
        {children}
      </div>
    </div>
  );
}

export default Key;
