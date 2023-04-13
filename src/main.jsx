import React from "react";
import ReactDOM from "react-dom/client";
import ImgComp from "./imgComp";
import Logo from "./Logo";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ImgCompPages1 from "./pages/imgCompPages1";
import ImgCompPages2 from "./pages/imgCompPages2";
import ImgCompPages3 from "./pages/imgCompPages3";

const Main = () => {
  return (
    <>
      {" "}
      <Logo />
      <ImgComp />
    </>
  );
};
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route element={<ImgCompPages1 />} path="/imgpage1" />
        <Route element={<ImgCompPages2 />} path="/imgpage2" />
        <Route element={<ImgCompPages3 />} path="/imgpage3" />
        <Route element={<Main />} path="/" />
      </Routes>
    </Router>
  </React.StrictMode>
);