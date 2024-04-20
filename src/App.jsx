import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="main px-[4vw] py-[2vw] m-0 flex flex-col justify-center items-center bg-[#FDFDFF]">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default App;
