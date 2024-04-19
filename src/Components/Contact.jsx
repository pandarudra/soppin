import React from "react";
import Header from "./Header";
import Footer from "./Footer";
const Contact = () => {
  return (
    <>
      <div className="w-full h-screen flex flex-col gap-9">
        <div className="h-16 w-full">
          <Header />
        </div>
        <form
          action="/"
          className="w-full h-screen flex flex-col items-center gap-9"
        >
          <lebel className="w-full h-12 text-center font-extrabold text-2xl">
            GET IN TOUCH
          </lebel>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className="w-64 h-10 my-2 mx-auto border-2 border-gray-300 px-4"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="w-64 h-10 my-2 mx-auto border-2 border-gray-300 px-4"
          />
          <textarea
            className="h-42 w-96 border-2 border-gray-300 px-4"
            placeholder="Message"
          ></textarea>
          <button className="w-32 h-10 bg-black text-white">Submit</button>
        </form>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
