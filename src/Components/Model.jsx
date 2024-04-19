import React from "react";
import Header from "./Header";
import Card2 from "./Repeats/Card2";
import model from "./Repeats/Model";
const Model = () => {
  return (
    <>
      <div className="w-full h-screen flex flex-col gap-9 model">
        <div className="h-16 w-full">
          <Header />
        </div>
        <div className="h-auto w-full flex gap-2">
          <div className="h-auto w-full flex gap-2">
            {model.map((e, i) => {
              return <Card2 key={i} src={e.img} txt={e.txt} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Model;
