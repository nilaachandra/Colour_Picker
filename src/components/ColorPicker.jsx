import React, { useState } from "react";

function ColorPicker() {

  const [color, setColor] = useState("#FFFFFF");
  const handleColorChange = (e) => {
    setColor(e.target.value);
  };


  return (
    <div className="flex flex-col items-center border-2 border-black w-full h-[40vh] lg lg:w-[20%] lg:h-[36vh] rounded-md">
      {/* <h1 className="font-bold text-2xl">Color Picker</h1>
      <p className="text-center">A simple fast and lightweight color picker for all your needs</p> */}
      
      {/* <h1 className="text-xl font-bold border-b-2 pb-2 text-center border-black w-full">My Color Picker</h1>
      <div className="color-display w-1/2 flex justify-center items-center border border-black p-4 rounded-xl h-[50%] mt-4"
      style={{backgroundColor: color}}>
      </div>
      <p className="text-xl w-full text-center border-black">Selected Color: {color}</p>
      <label htmlFor="">Select a Color:</label>
      <input className="lg:w-[3vw] lg:h-[3vw] h-[10vw] w-[10vw]" type="color" value={color} onChange={handleColorChange} /> */}
    </div>
  );
}

export default ColorPicker;
