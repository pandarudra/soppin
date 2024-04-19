import React from "react";
import Header from "./Header";
const Blog = () => {
  return (
    <>
      <div className="w-full h-screen flex flex-col gap-9">
        <div className="h-16 w-full">
          <Header />
        </div>
        <div className="w-full h-screen blog"></div>
      </div>
    </>
  );
};

export default Blog;
