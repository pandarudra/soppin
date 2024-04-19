import React from "react";

const Card = ({ src, rs }) => {
  return (
    <>
      <div className="flex flex-col justify-center  items-center w-64 h-128  mx-4">
        <img
          src={src}
          className="w-64 h-96 m-4 border-2 border-blue-700 card"
        />
        <div className="font-black text-2xl flex justify-center my-3 text-red-700">
          {rs}
        </div>
        <button className="h-9 w-32 bg-red-400 hover:bg-red-700 text-white">
          Add to cart
        </button>
      </div>
    </>
  );
};

export default Card;
