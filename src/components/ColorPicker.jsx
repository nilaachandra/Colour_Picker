import React, { useState, useRef } from "react";
import Button from "./Button";
import { Toaster, toast } from 'sonner'
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


const ColorPicker = () => {

  const [color, setColor] = useState("#FFFFFF");
  
  const container = useRef()
  useGSAP(() => {
    gsap.from(".box", {
      opacity: 0,
      duration: 0.8,
      stagger: 0.4,
      ease:'power2.in',
    })
  
  }, { scope: container });

  const handleColorChange = (e) => {
    setColor(e.target.value.toUpperCase());
  };

  const copyToClipboard = () => {
    // Create a textarea element to copy the color value
    const textarea = document.createElement("textarea");
    textarea.value = color;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    toast.success('Copied')
  };


  return (
    <div ref={container} className="w-full">
          <div className="box w-full flex flex-col justify-center items-center min-h-[40vh] gap-3 mt-7">
      <div className="lg:w-1/2 w-[75%] flex flex-col justify-center items-center">
        <h1 className="font-bold lg:text-[4vw] text-[10vw] leading-[10vw] lg:leading-[4vw] text-center">
          Color Picker
        </h1>
        <p className="lg:text-[1.4vw] poppins-regular-italic text-[5vw] text-center w-full lg:w-[60%]">
          A simple fast and lightweight color picker for all your needs. Pick
          your Color!
        </p>
      </div>
      <div
        className="lg:w-1/2 w-full lg:h-[50vh] h-[30vh] rounded-xl flex justify-center items-center text-xl font-bold"
        style={{ backgroundColor: color, border: color=='#FFFFFF' ? '1px solid black' : `1px solid ${color}` }}
      >{color}</div>
    <div className="picker flex justify-center items-center gap-3">
      <label htmlFor="" className="text-xl font-bold">Select a Color:</label>
      <input className="lg:w-[3vw] lg:h-[3vw] h-[10vw] w-[10vw] rounded-xl" type="color" value={color} onChange={handleColorChange} />
    </div>
    <div className="copy flex justify-center items-center gap-3">
      <h1 className="font-bold text-xl" style={{color: color=='#FFFFFF' ? "black" : color}}>{color}</h1>
      <Button onClick={copyToClipboard} className='bg-[#0611f2] text-[white] border-[#0611f2] uppercase hover:bg-white hover:text-[#0611f2] transition-all duration-300 font-bold '>Copy Color</Button>
    </div>
    <h1>Want a Gradient? Check out Our <Link to='/gradient-picker' className="text-[#0611f2]">Gradient Picker!</Link></h1>
    <Toaster richColors position="top-right" duration={3000} toastOptions={{classNames: {title: 'text-[#0611f2]'}}}/>
    </div>
    </div>

  );
}

export default ColorPicker;
