import React from "react";

const Card2 = ({ src, txt }) => {
  return (
    <>
      <img className="h-96 w-auto mx-4 object-cover" src={src} />
      <div className="border-2 border-transparent h-7 bg-slate-300 hover:border-b-orange-900">
        {txt}
      </div>
    </>
  );
};

export default Card2;
