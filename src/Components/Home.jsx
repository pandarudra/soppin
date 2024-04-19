import React from "react";
import Shery from "sheryjs";
import Header from "./Header";
import Card from "./Repeats/Card";
import data from "./Repeats/Data.js";
import Quots from "./Quots.jsx";
import Footer from "./Footer.jsx";
// Shery.mouseFollower();

const Home = () => {
  return (
    <>
      <div className="w-full h-screen flex gap-12  flex-col">
        <div>
          <Header />
        </div>
        <div>
          <Quots />
        </div>
        <div className="w-full h-auto my-4 grid grid-cols-4 items-center ">
          {data.map((elem, i) => {
            return <Card key={i} src={elem.img} rs={elem.rs} />;
          })}
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
