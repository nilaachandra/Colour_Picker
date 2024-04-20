import React from "react";
import ColorPicker from "./components/ColorPicker";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="main px-[4vw] py-[2vw] m-0 flex flex-col justify-center items-center bg-[#FDFDFF]">
        <Navbar/>
        <Homepage/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
