import React, { useState,useRef } from 'react';
import Button from './Button';
import { Toaster, toast } from 'sonner'
import { Link } from 'react-router-dom';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const GradientPicker = () => {
  const [angle, setAngle] = useState(0);
  const [color1, setColor1] = useState('#FFFFFF');
  const [color2, setColor2] = useState('#000000');
  const [percentage, setPercentage] = useState(50);
  const [position, setPosition] = useState(0);
  const [gradientType, setGradientType] = useState('linear');

  const updateGradient = () => {
    const angleValue = angle + 'deg';
    const percentageValue = percentage + '%';
    const positionValue = position + '%';
    const gradient = gradientType === 'linear'
      ? `linear-gradient(${angleValue}, ${color1} ${positionValue}, ${color2} 100%)`
      : `radial-gradient(circle, ${color1} ${percentageValue}, ${color2} 100%)`;
    return gradient;
  };

  const cssCode = `background: ${updateGradient()};`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(cssCode);
    toast.success('Copied')
  };

  const container = useRef()
  useGSAP(() => {
    gsap.from(".box", {
      opacity: 0,
      duration: 0.8,
      stagger: 0.4,
      ease:'power2.in',
    })
  
  }, { scope: container });
  return (
    <div ref={container} className='w-full'>
          <div className="box w-full flex flex-col justify-center items-center mx-auto p-6 rounded-md font-bold">
      <div className="lg:w-1/2 w-[100%] flex flex-col justify-center items-center font-normal mb-4">
        <h1 className="font-bold lg:text-[4vw] text-[10vw] leading-[10vw] lg:leading-[4vw] text-center">
          Gradient Picker
        </h1>
        <p className="lg:text-[1.4vw] text-[5vw] text-center w-full lg:w-[60%] poppins-regular-italic">
          A simple fast and lightweight Gradient picker for all your needs. Pick
          your Gradient!
        </p>
      </div>
        <div className="lg:w-1/2 w-full lg:h-[50vh] h-[30vh] rounded-xl flex justify-center items-center text-xl font-bold" style={{ background: updateGradient() }}></div>
          <div className='lg:w-[30%] w-full flex flex-col'>
          <div className="flex items-center justify-between mt-2 text-xl">
        <label className="mr-2 ">Gradient Type:</label>
        <select value={gradientType} onChange={e => setGradientType(e.target.value)} className="rounded-md border border-black p-2">
          <option value="linear">Linear Gradient</option>
          <option value="radial">Radial Gradient</option>
        </select>
      </div>
      <div className="flex items-center justify-between mt-4 text-xl">
        <label className="mr-2">Angle:</label>
        <input type="range" min="0" max="360" value={angle} onChange={e => setAngle(e.target.value)} />
      </div>
      {gradientType === 'linear' && (
        <div className="flex items-center justify-between mt-2 text-xl">
          <label className="mr-2">Position:</label>
          <input type="range" min="0" max="100" value={position} onChange={e => setPosition(e.target.value)} />
        </div>
      )}
      {gradientType === 'radial' && (
        <div className="flex items-center justify-between mt-2 text-xl">
          <label className="mr-2">Percentage:</label>
          <input type="range" min="0" max="100" value={percentage} onChange={e => setPercentage(e.target.value)} />
        </div>
      )}
      <div className="flex items-center justify-between mt-2 text-xl">
        <label className="mr-2">Color 1:</label>
        <input type="color" value={color1} onChange={e => setColor1(e.target.value.toUpperCase())} className='lg:w-[3vw] lg:h-[3vw] h-[10vw] w-[10vw] rounded-xl'/>
      </div>
      <div className="flex items-center justify-between mt-2 text-xl">
        <label className="mr-2">Color 2:</label>
        <input type="color" value={color2} onChange={e => setColor2(e.target.value.toUpperCase())} className='lg:w-[3vw] lg:h-[3vw] h-[10vw] w-[10vw] rounded-xl'/>
      </div>
    
    
      <div className="mt-4">
        <textarea value={cssCode} readOnly rows="4" className="w-full font-mono rounded-md  border border-black p-2"></textarea>
      </div>
      <div className="flex justify-between mt-4">
        <Button className='bg-[#0611f2] text-[white] border-[#0611f2] uppercase hover:bg-white hover:text-[#0611f2] transition-all duration-300 font-bold ' onClick={copyToClipboard}>Copy Gradient</Button>
      </div>
          </div>
          <h1 className='mt-4 font-normal'>Want a Color? Check out Our <Link to='/color-picker' className="text-[#0611f2]">Color Picker!</Link></h1>
          <Toaster richColors position="top-right" duration={3000} toastOptions={{classNames: {title: 'text-[#0611f2]'}}}/>
    </div>

    </div>
  );
}

export default GradientPicker;
