import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="w-full h-16 bg-green-700 flex justify-evenly items-center shadow-2xl fixed top-0">
        <div className=" h-9 w-3 text-white font-black logo">Shoppin...</div>
        <div className="flex w-5/12 justify-evenly">
          <Link to="/" className="w-auto px-3 h-9 text-white font-black  link">
            HOME
          </Link>
          <Link
            to="/about"
            className="w-auto px-3 h-9 text-white font-black link"
          >
            ABOUT
          </Link>
          <Link
            to="/blog"
            className="w-auto px-3 h-9 text-white font-black link"
          >
            BLOG
          </Link>
          <Link
            to="/model"
            className="w-auto px-3 h-9 text-white font-black link"
          >
            MODELS
          </Link>
          <Link
            to="/contact"
            className="w-auto px-3 h-9 text-white font-black link"
          >
            CONTACT
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
