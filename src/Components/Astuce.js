import React from "react";

const Astuce = ({ errorState, afterLetter }) => {
  return (
    <div className=" font-bold px-4 py-2 rounded w-fit mb-4 bg-green">
      ASTUCE :{" "}
      {errorState ? (
        "Effacer"
      ) : (
        <span className="text-red-500">{afterLetter()}</span>
      )}
    </div>
  );
};

export default Astuce;
