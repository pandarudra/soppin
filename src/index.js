import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";

import About from "./Components/About";
import Blog from "./Components/Blog";
import Model from "./Components/Model";
import Contact from "./Components/Contact";
import Home from "./Components/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/model" element={<Model />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
);
